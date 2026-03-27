import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {ScreenSlide} from './ScreenSlide';

export const Walkthrough: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={60}>
        <ScreenSlide
          imagePath="assets/screens/signup.png"
          title="B2B Business Signup"
          description="Seamless onboarding for professional services and business providers."
        />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Transition
        timing={linearTiming({durationInFrames: 15})}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={60}>
        <ScreenSlide
          imagePath="assets/screens/setup.png"
          title="Profile Configuration"
          description="Customize business details, operating hours, and service catalogs."
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({durationInFrames: 15})}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={60}>
        <ScreenSlide
          imagePath="assets/screens/dashboard.png"
          title="Analytics & Insights"
          description="Track bookings, revenue trends, and customer engagement at a glance."
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({durationInFrames: 15})}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={60}>
        <ScreenSlide
          imagePath="assets/screens/inbox.png"
          title="Booking Management"
          description="Keep track of all client requests and reservations in one centralized inbox."
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
