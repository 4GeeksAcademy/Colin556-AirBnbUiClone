import { useEffect, useState } from "react";
import { getRoomById } from "@/lib/mock-data";
import { RoomDetail } from "@/types/listing";

const MIN_GUESTS = 1;

export const useRoomPageState = (roomId: string | undefined) => {
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      const roomData = getRoomById(roomId);
      setRoom(roomData ?? null);
      setPhotoIndex(0);
      setGuestCount(roomData ? Math.min(2, roomData.maxGuests) : 2);
      setIsLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [roomId]);

  const onPreviousPhoto = () => {
    if (!room) return;
    setPhotoIndex((current) => (current - 1 + room.gallery.length) % room.gallery.length);
  };

  const onNextPhoto = () => {
    if (!room) return;
    setPhotoIndex((current) => (current + 1) % room.gallery.length);
  };

  const onDecreaseGuests = () => {
    setGuestCount((current) => Math.max(MIN_GUESTS, current - 1));
  };

  const onIncreaseGuests = () => {
    if (!room) return;
    setGuestCount((current) => Math.min(room.maxGuests, current + 1));
  };

  return {
    room,
    isLoading,
    photoIndex,
    guestCount,
    setPhotoIndex,
    onPreviousPhoto,
    onNextPhoto,
    onDecreaseGuests,
    onIncreaseGuests,
  };
};
