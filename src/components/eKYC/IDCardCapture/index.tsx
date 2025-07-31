import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import styles from "./IDCardCapture.module.scss";

type Props = {
  title: string;
  image: string | null;
  onImageCaptured: (base64: string | null) => void;
};

export default function IDCardCapture({ title, image, onImageCaptured }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      } else {
        const interval = setInterval(() => {
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            clearInterval(interval);
          }
        }, 100);
      }

      setStream(mediaStream);
      setIsCameraActive(true);
    } catch (err) {
      console.error("Cannot access camera:", err);
      alert("Không thể truy cập camera");
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setIsCameraActive(false);
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      onImageCaptured(imageData);
      stopCamera();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      // Nếu muốn gửi base64 về luôn:
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageCaptured(reader.result as string); // <== Đẩy về cha
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <p className='mb-0'>{title}</p>

        {image ? (
          <img src={image} alt='' className={styles.preview} />
        ) : (
          isCameraActive && <video ref={videoRef} autoPlay playsInline className={styles.cameraPreview} />
        )}

        <div className={styles.buttons}>
          <Button color='primary' onClick={triggerFileInput}>
            Tải ảnh lên
          </Button>
          <Button
            color='danger'
            onClick={() => {
              if (isCameraActive) {
                captureImage();
              } else {
                startCamera();
                onImageCaptured(null);
              }
            }}>
            Chụp ảnh
          </Button>
          {isCameraActive && (
            <Button color='primary' outline onClick={stopCamera}>
              Huỷ camera
            </Button>
          )}
        </div>
      </div>

      <input type='file' hidden accept='image/*' ref={fileInputRef} onChange={handleUpload} />
      <canvas ref={canvasRef} className='d-none' />
    </>
  );
}
