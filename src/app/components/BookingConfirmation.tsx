import { CheckCircle, Calendar, Clock, User2, Phone, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type BookingDetails = {
  name: string;
  phone: string;
  classItem: {
    time: string;
    class: string;
    trainer: string;
    duration: string;
    spots: number;
    day?: string;
  };
  confirmationNumber: string;
};

type Props = {
  details: BookingDetails;
  onBack: () => void;
};

export function BookingConfirmation({ details, onBack }: Props) {
  const { name, phone, classItem, confirmationNumber } = details;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        {/* Success icon */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <CheckCircle className="size-20 text-green-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h1>
          <p className="text-gray-500">
            Your spot has been reserved. See you at the gym!
          </p>
        </div>

        {/* Confirmation number */}
        <div className="bg-red-600 rounded-xl p-4 text-center text-white">
          <p className="text-sm opacity-80 uppercase tracking-widest mb-1">Confirmation Number</p>
          <p className="text-2xl font-mono font-bold tracking-wider">{confirmationNumber}</p>
        </div>

        {/* Booking details */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="font-semibold text-gray-800 text-lg">Booking Details</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-red-50">
                  <Calendar className="size-4 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500">Class</p>
                  <p className="font-medium text-gray-900">{classItem.class}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-red-50">
                  <Clock className="size-4 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500">Day &amp; Time</p>
                  <p className="font-medium text-gray-900">{classItem.day} at {classItem.time} · {classItem.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-red-50">
                  <User2 className="size-4 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500">Trainer</p>
                  <p className="font-medium text-gray-900">{classItem.trainer}</p>
                </div>
              </div>

              <div className="border-t pt-3 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 rounded-full bg-gray-100">
                    <User2 className="size-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-gray-500">Booked by</p>
                    <p className="font-medium text-gray-900">{name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 rounded-full bg-gray-100">
                    <Phone className="size-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="size-4" />
          Back to Schedule
        </Button>
      </div>
    </div>
  );
}
