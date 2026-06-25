"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Heart, Check, XCircle, Target, Sparkles, Sprout, Medal, Trophy, Diamond, ChevronLeft, ArrowRight, RefreshCw } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { StaticImageData } from "next/image";
import soilLessonImg from "../../../../public/soil_lesson.png";
import waterLessonImg from "../../../../public/water_lesson.png";
import seedLessonImg from "../../../../public/seed_lesson.png";
import heroImg from "../../../../public/hero_image.png";

type StepType = 'info' | 'mcq' | 'mission' | 'flashcards';

interface NarrativeBlock {
  id: string;
  subtitle?: string;
  icon?: React.ReactNode;
  text: string | React.ReactNode;
}

interface Flashcard {
  id: string;
  front: string;
  back: string;
}

interface LessonStep {
  type: StepType;
  title: string;
  leftGradient: string;
  leftCardTitle: string;
  leftCardSubtitle: string;
  leftCardIcon: React.ReactNode;
  imagePath: string | StaticImageData;
  narrativeBlocks?: NarrativeBlock[];
  flashcards?: Flashcard[];
  // mcq / mission stuff
  content?: string | React.ReactNode;
  options?: string[];
  correctAnswer?: number;
  missionAction?: string;
}

const lessonSteps: LessonStep[] = [
  // LESSON 1
  {
    type: 'info',
    title: 'THE LIVING EARTH',
    leftGradient: 'from-[#ff5e00] to-black',
    leftCardTitle: 'Chapter 1',
    leftCardSubtitle: 'Soil Foundations',
    leftCardIcon: <Sprout size={24} className="text-orange-500" />,
    imagePath: soilLessonImg,
    narrativeBlocks: [
      {
        id: 'block1',
        subtitle: 'More than dirt',
        text: 'Soil is not mere dirt; it is a complex, dynamic system that supports all terrestrial life. A healthy soil profile is organized into distinct layers called horizons.'
      },
      {
        id: 'block2',
        subtitle: 'A Horizon',
        icon: <div className="bg-orange-100 text-orange-700 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">A</div>,
        text: 'Also known as topsoil. It is extremely rich in organic matter and is absolutely essential for plant nutrition.'
      },
      {
        id: 'block3',
        subtitle: 'B Horizon',
        icon: <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">B</div>,
        text: 'Also known as subsoil. This is the accumulation zone where minerals leach from above and gather over time.'
      }
    ]
  },
  {
    type: 'mission',
    title: 'THE SPADE TEST',
    leftGradient: 'from-[#ff5e00] to-black',
    leftCardTitle: 'Field Mission',
    leftCardSubtitle: 'Hands-on Learning',
    leftCardIcon: <Target size={24} className="text-orange-500" />,
    imagePath: soilLessonImg,
    content: 'Dig a hole 12 inches deep in your yard or farm. Observe the walls of the hole and label the layers you see based on color and texture changes. This will reveal your local soil horizons.',
    missionAction: 'I Accept This Mission'
  },

  // LESSON 2
  {
    type: 'info',
    title: 'WATER DYNAMICS',
    leftGradient: 'from-blue-600 to-slate-900',
    leftCardTitle: 'Chapter 2',
    leftCardSubtitle: 'Hydrology',
    leftCardIcon: <Diamond size={24} className="text-blue-500" />,
    imagePath: waterLessonImg,
    narrativeBlocks: [
      {
        id: 'block4',
        subtitle: 'The Vital Nutrient',
        text: 'Water is both a vital nutrient and a transport mechanism for soil minerals. Without proper water dynamics, even the richest soil is useless.'
      },
      {
        id: 'block5',
        subtitle: 'Soil Texture Matters',
        text: 'The texture of your soil dictates how you manage your farm. Sand consists of large particles and drains extremely fast. Clay consists of tiny particles that hold water tightly, but can easily drown plant roots if not managed.'
      }
    ]
  },
  {
    type: 'mcq',
    title: 'If your test hole drains water almost instantly, what do you need more of?',
    leftGradient: 'from-blue-600 to-slate-900',
    leftCardTitle: 'Knowledge Check',
    leftCardSubtitle: 'Test your understanding',
    leftCardIcon: <Sparkles size={24} className="text-blue-500" />,
    imagePath: waterLessonImg,
    options: ['More sand', 'Organic matter', 'Gravel', 'Nothing, fast drainage is perfect'],
    correctAnswer: 1
  },
  {
    type: 'mission',
    title: 'THE DRAINAGE CHECK',
    leftGradient: 'from-blue-600 to-slate-900',
    leftCardTitle: 'Field Mission',
    leftCardSubtitle: 'Hands-on Learning',
    leftCardIcon: <Target size={24} className="text-blue-500" />,
    imagePath: waterLessonImg,
    content: 'Pour a set amount of water into the hole you dug previously. Note the exact time it takes to disappear completely. If it drains too quickly, you need more organic matter; if it stays for hours, your drainage needs serious improvement.',
    missionAction: 'I Will Test My Soil'
  },

  // LESSON 3
  {
    type: 'info',
    title: "THE SEED'S MIRACLE",
    leftGradient: 'from-emerald-500 to-[#064e3b]',
    leftCardTitle: 'Chapter 3',
    leftCardSubtitle: 'Plant Life',
    leftCardIcon: <Sprout size={24} className="text-emerald-500" />,
    imagePath: seedLessonImg,
    narrativeBlocks: [
      {
        id: 'block6',
        subtitle: 'Domestication',
        text: 'The domestication of crops over thousands of years relied on selecting seeds that were larger, non-shattering (meaning they do not drop seed before harvest), and easier to process.'
      },
      {
        id: 'block7',
        subtitle: 'The Three Sisters',
        text: 'Indigenous farmers perfected intercropping through the "Three Sisters" method: planting Corn, Beans, and Squash together in harmony.'
      },
      {
        id: 'block8',
        subtitle: 'Symbiosis in Action',
        text: 'Corn provides a natural tall trellis for beans to climb. Beans are legumes that actively fix atmospheric nitrogen in the soil. Squash spreads broad leaves across the ground acting as a "living mulch" to suppress weeds and retain moisture.'
      }
    ]
  },
  {
    type: 'flashcards',
    title: 'Comprehensive Lesson Review',
    leftGradient: 'from-blue-900 to-indigo-950',
    leftCardTitle: 'Chapter 4',
    leftCardSubtitle: 'Flashcard Review',
    leftCardIcon: <Sparkles size={24} className="text-blue-500" />,
    imagePath: seedLessonImg,
    flashcards: [
      { id: 'fc1', front: 'What is the "A Horizon" in a soil profile?', back: 'It is the topsoil layer, rich in organic matter and absolutely essential for plant nutrition and root growth.' },
      { id: 'fc2', front: 'How does Sand differ from Clay in water dynamics?', back: 'Sand has large particles that drain water quickly, while Clay consists of tiny particles that hold water tightly, risking drowned roots.' },
      { id: 'fc3', front: 'What is the purpose of the "Spade Test"?', back: 'To dig a 12-inch hole and manually label the soil layers (horizons) based on their color and texture.' },
      { id: 'fc4', front: 'In the Three Sisters, what role does Corn play?', back: 'Corn acts as a tall, sturdy natural trellis for the beans to climb toward the sunlight.' },
      { id: 'fc5', front: 'Why are Beans crucial to the soil?', back: 'They are legumes that fix atmospheric nitrogen into the soil, acting as a natural, living fertilizer.' },
      { id: 'fc6', front: 'How does Squash protect the ecosystem?', back: 'Its broad leaves spread across the ground, acting as "living mulch" to suppress weeds and retain soil moisture.' }
    ]
  },
  {
    type: 'mcq',
    title: 'In the Three Sisters planting method, what is the specific role of the beans?',
    leftGradient: 'from-emerald-500 to-[#064e3b]',
    leftCardTitle: 'Knowledge Check',
    leftCardSubtitle: 'Test your understanding',
    leftCardIcon: <Sparkles size={24} className="text-emerald-500" />,
    imagePath: seedLessonImg,
    options: ['Act as living mulch to suppress weeds', 'Provide a natural trellis for climbing', 'Fix nitrogen in the soil', 'Scare away pests'],
    correctAnswer: 2
  },
  {
    type: 'mission',
    title: 'GERMINATION TEST',
    leftGradient: 'from-emerald-500 to-[#064e3b]',
    leftCardTitle: 'Final Mission',
    leftCardSubtitle: 'Hands-on Learning',
    leftCardIcon: <Trophy size={24} className="text-amber-500" />,
    imagePath: seedLessonImg,
    content: 'Place exactly 10 seeds inside a damp paper towel and seal it in a bag. Check it daily for the emergence of the radicle (the first root). This teaches you to respect the specific timing and moisture required for different species.',
    missionAction: 'Start Germination'
  }
];

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }} className="text-slate-900">{children}</motion.span>;
};

const NarrativeBlockComponent = ({ block }: { block: NarrativeBlock }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const words = typeof block.text === 'string' ? block.text.split(" ") : [];

  return (
    <div ref={containerRef} className="h-auto lg:h-[200vh] relative border-t border-slate-200">
      <div className="relative lg:sticky top-0 h-auto lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-24 py-12 lg:py-0">

        {/* Storybook Reveal Header */}
        <motion.div
          initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {block.icon}
          {block.subtitle && (
            <div className="flex items-center gap-4 mb-8">
              <Sparkles size={20} className="text-slate-300 shrink-0" />
              <h3 className="text-2xl font-serif text-slate-900 tracking-tight">{block.subtitle}</h3>
            </div>
          )}
        </motion.div>

        {/* Typing on Scroll Text (Desktop) / Storybook Reveal (Mobile) */}
        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium mt-4 flex flex-wrap gap-x-2 gap-y-1.5 md:gap-x-2.5 md:gap-y-2"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {typeof block.text === 'string' ? (
            words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <React.Fragment key={i}>
                  <span className="lg:hidden text-slate-900">{word}</span>
                  <span className="hidden lg:inline">
                    <Word progress={scrollYProgress} range={[Math.max(0, start - 0.1), Math.min(1, end + 0.1)]}>{word}</Word>
                  </span>
                </React.Fragment>
              );
            })
          ) : (
            block.text
          )}
        </motion.div>

      </div>
    </div>
  );
};

const SwipeableCard = ({ card, isTop, index, onSwipe }: { card: Flashcard, isTop: boolean, index: number, onSwipe: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe();
    }
  };

  return (
    <motion.div
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
        zIndex: 10 - index,
        y: index * 20,
        perspective: 1000,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onClick={() => isTop && setIsFlipped(!isFlipped)}
      initial={false}
      animate={{ scale: 1 - index * 0.05, y: index * 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      exit={{ x: x.get() > 0 ? 500 : -500, opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full bg-white rounded-[32px] p-3 flex flex-col md:flex-row gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Left Gradient Area */}
          <div className="hidden md:block w-[40%] h-full rounded-[24px] bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50 relative overflow-hidden flex-shrink-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl" />
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col justify-between py-6 pr-6 pl-6 md:pl-2">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-4">Question</p>
              <h3 className="text-2xl md:text-3xl font-serif text-slate-800 leading-snug">{card.front}</h3>
            </div>
            
            <div className="mt-8">
              <span className="px-4 py-2 bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full">
                Tap to Reveal
              </span>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full bg-white rounded-[32px] p-3 flex flex-col md:flex-row gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100" 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Left Gradient Area */}
          <div className="hidden md:block w-[40%] h-full rounded-[24px] bg-gradient-to-br from-emerald-200 via-teal-100 to-emerald-50 relative overflow-hidden flex-shrink-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-400/30 rounded-full blur-3xl" />
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col justify-between py-6 pr-6 pl-6 md:pl-2">
            <div>
              <p className="text-emerald-500 text-sm font-bold mb-4">Answer</p>
              <h3 className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">{card.back}</h3>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={(e) => { e.stopPropagation(); onSwipe(); }}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold uppercase tracking-wider rounded-full flex items-center gap-2 transition-colors shadow-[0_8px_16px_-4px_rgba(16,185,129,0.4)]"
              >
                Next Card <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FlashcardDeck = ({ cards, onComplete }: { cards: Flashcard[], onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  if (index >= cards.length) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200 text-center relative z-10 w-full"
      >
        <Trophy className="text-emerald-500 mb-6" size={48} />
        <h2 className="text-3xl font-serif text-slate-900">Review Complete!</h2>
        <p className="text-slate-500 mt-2 mb-10 font-medium">You are ready for the final challenge.</p>
        <button 
          onClick={onComplete}
          className="bg-slate-900 text-white px-12 py-5 rounded-[24px] font-bold tracking-widest uppercase text-sm hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center gap-4 group"
        >
          Take The Final Challenge
          <ChevronLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl lg:max-w-3xl h-[340px] md:h-[380px] mx-auto flex justify-center items-center">
      <AnimatePresence>
        {cards.map((card, i) => {
          if (i < index) return null;
          const isTop = i === index;
          return (
            <SwipeableCard key={card.id} card={card} isTop={isTop} index={i - index} onSwipe={() => setIndex(index + 1)} />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default function LessonPage() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // MCQ State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hearts, setHearts] = useState(5);

  const [isLessonComplete, setIsLessonComplete] = useState(false);

  const step = lessonSteps[currentStepIndex];

  const handleAction = () => {
    if (step.type === 'mcq') {
      if (!isChecking) {
        setIsChecking(true);
        const correct = selectedOption === step.correctAnswer;
        setIsCorrect(correct);
        if (!correct) {
          setHearts((h) => Math.max(0, h - 1));
        }
      } else {
        if (isCorrect) {
          advanceStep();
        } else {
          setIsChecking(false);
          setIsCorrect(null);
          setSelectedOption(null);
        }
      }
    } else {
      advanceStep();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(i => i - 1);
      setIsChecking(false);
      setIsCorrect(null);
      setSelectedOption(null);
      window.scrollTo(0, 0);
    } else {
      router.push('/learn');
    }
  };

  const advanceStep = () => {
    if (currentStepIndex < lessonSteps.length - 1) {
      setCurrentStepIndex(i => i + 1);
      setIsChecking(false);
      setIsCorrect(null);
      setSelectedOption(null);
      window.scrollTo(0, 0); // Reset scroll for new step
    } else {
      setIsLessonComplete(true);
    }
  };

  // -------------------------------------------------------------
  // COMPLETION SCREEN
  // -------------------------------------------------------------
  if (isLessonComplete) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-50" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="bg-white rounded-[40px] p-16 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative z-10 max-w-lg w-full flex flex-col items-center border border-white/10"
        >
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-28 h-28 rounded-[32px] flex items-center justify-center shadow-xl shadow-orange-500/30 mb-10 text-white">
            <Trophy size={56} strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl font-serif text-slate-900 mb-6 tracking-tight">Lesson Complete</h1>
          <p className="text-lg text-slate-500 font-medium mb-12">You've mastered the foundations of soil, water, and seeds.</p>

          <div className="flex justify-center gap-6 mb-12 w-full">
            <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex-1">
              <span className="block text-slate-400 font-bold text-xs mb-2 uppercase tracking-widest">XP Earned</span>
              <span className="block text-slate-900 font-extrabold text-3xl">+50</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex-1">
              <span className="block text-slate-400 font-bold text-xs mb-2 uppercase tracking-widest">Missions</span>
              <span className="block text-slate-900 font-extrabold text-3xl">3</span>
            </div>
          </div>

          <button
            onClick={() => router.push('/learn')}
            className="w-full bg-slate-900 text-white py-6 rounded-[24px] font-bold text-lg tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl shadow-slate-900/20"
          >
            Continue Journey
          </button>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ACTIVE LESSON UI (50/50 Split)
  // -------------------------------------------------------------
  const isFullScreen = step.type === 'flashcards';

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-slate-50 relative">

      {/* FIXED TOP NAVIGATION CARD (DESKTOP ONLY) */}
      <div className={`hidden lg:flex fixed top-6 z-50 justify-center px-4 pointer-events-none transition-all duration-700 ${isFullScreen ? 'left-0 right-0 w-full' : 'left-0 w-1/2'}`}>
        <div className="bg-white/95 backdrop-blur-3xl rounded-[24px] p-2.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white flex items-center justify-between gap-4 w-full max-w-xl pointer-events-auto">
          <button onClick={handleBack} className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-[16px] border border-slate-100 shrink-0">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-w-0"
            >
              <div className="flex flex-col justify-center px-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-slate-400 font-bold text-[9px] uppercase tracking-widest truncate">
                    {step.leftCardTitle} • <span className="text-slate-900">{step.leftCardSubtitle}</span>
                  </h4>
                  <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest shrink-0 ml-2">
                    {currentStepIndex + 1} / {lessonSteps.length}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-slate-900 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${((currentStepIndex) / lessonSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-1.5 text-rose-500 font-bold text-sm bg-rose-50 px-3 py-1.5 rounded-[16px] border border-rose-100 shrink-0">
            <Heart fill="currentColor" size={16} />
            <span>{hearts}</span>
          </div>
        </div>
      </div>

      {/* LEFT SIDE (HERO ON MOBILE, FIXED ON DESKTOP) */}
      <div className={`w-full lg:w-1/2 bg-gradient-to-b ${step.leftGradient} flex-col justify-between pt-4 lg:pt-28 px-4 lg:px-12 pb-4 lg:pb-0 transition-all duration-700 relative lg:fixed lg:top-0 lg:left-0 lg:bottom-0 ${isFullScreen ? 'hidden' : 'flex'}`}>
        
        {/* MOBILE NAVIGATION CARD (Inside the Hero Card) */}
        <div className="lg:hidden w-full flex justify-center z-50 mb-4">
          <div className="bg-white/95 backdrop-blur-3xl rounded-[24px] p-2.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white flex items-center justify-between gap-4 w-full max-w-xl pointer-events-auto">
            <button onClick={handleBack} className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-[16px] border border-slate-100 shrink-0">
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col justify-center px-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-slate-400 font-bold text-[9px] uppercase tracking-widest truncate">
                    {step.leftCardTitle} • <span className="text-slate-900">{step.leftCardSubtitle}</span>
                  </h4>
                  <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest shrink-0 ml-2">
                    {currentStepIndex + 1} / {lessonSteps.length}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-slate-900 h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${((currentStepIndex) / lessonSteps.length) * 100}%` }} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-rose-500 font-bold text-sm bg-rose-50 px-3 py-1.5 rounded-[16px] border border-rose-100 shrink-0">
              <Heart fill="currentColor" size={16} />
              <span>{hearts}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative z-10 w-full min-h-[300px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[40vh] lg:h-full min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-[24px] lg:rounded-none shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <Image
                src={step.imagePath}
                alt={step.leftCardTitle}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SIDE SCROLLABLE CONTENT */}
      <div className={`flex-1 w-full relative transition-all duration-700 lg:min-h-screen ${isFullScreen ? 'lg:w-full lg:ml-0 bg-slate-50/50' : 'bg-white lg:w-1/2 lg:ml-[50%]'}`}>

        {/* Content Area */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >

              {/* === INFO STEP (Narrative Scroll) === */}
              {step.type === 'info' && (
                <div>
                  <motion.div 
                    className="pt-10 lg:pt-24 pb-10 px-6 md:px-10 lg:px-16 xl:px-24"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-serif tracking-tight leading-[1.2] mb-10 md:mb-16 text-slate-900">
                      {step.title}
                    </h1>
                  </motion.div>

                  {step.narrativeBlocks?.map((block) => (
                    <NarrativeBlockComponent key={block.id} block={block} />
                  ))}

                  <motion.div 
                    className="p-8 md:p-24 flex justify-center border-t border-slate-100 bg-slate-50"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={advanceStep}
                      className="bg-slate-900 text-white px-12 py-5 rounded-[24px] font-bold tracking-widest uppercase text-sm hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center gap-4 group"
                    >
                      Continue
                      <ChevronLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              )}

              {/* === FLASHCARDS STEP === */}
              {step.type === 'flashcards' && (
                <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
                  {/* Hero Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={heroImg}
                      alt="Hero Background"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="w-full flex-1 flex items-center justify-center perspective-[1000px] z-10 relative">
                    <FlashcardDeck cards={step.flashcards || []} onComplete={advanceStep} />
                  </div>
                </div>
              )}

              {/* === MISSION STEP === */}
              {step.type === 'mission' && (
                <motion.div 
                  className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-24 py-16 lg:py-24"
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest mb-6">
                    <Target size={18} /> Action Required
                  </div>
                  <h1 className="text-3xl md:text-5xl xl:text-7xl font-serif tracking-tight leading-[1.1] mb-8 md:mb-12 uppercase text-slate-900">
                    {step.title}
                  </h1>
                  <p className="text-lg md:text-xl xl:text-2xl text-slate-600 font-medium leading-relaxed mb-12 md:mb-16">
                    {step.content as string}
                  </p>
                  <button
                    onClick={advanceStep}
                    className="bg-orange-500 text-white px-12 py-6 rounded-full font-bold text-xl tracking-wide hover:scale-105 transition-transform shadow-xl shadow-orange-500/30 self-start"
                  >
                    {step.missionAction}
                  </button>
                </motion.div>
              )}

              {/* === MCQ STEP === */}
              {step.type === 'mcq' && (
                <motion.div 
                  className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center py-10 lg:py-24"
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-8 md:px-20 lg:px-24">
                    <h1 className="text-3xl lg:text-4xl font-serif text-slate-900 tracking-tight leading-[1.2] mb-16">
                      {step.title}
                    </h1>

                    <div className="grid gap-4">
                      {step.options?.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const showCorrect = isChecking && index === step.correctAnswer;
                        const showWrong = isChecking && isSelected && !isCorrect;

                        return (
                          <button
                            key={index}
                            disabled={isChecking}
                            onClick={() => setSelectedOption(index)}
                            className={`
                              w-full text-left p-6 rounded-3xl border-2 text-lg font-medium transition-all
                              ${!isSelected && !isChecking ? 'border-slate-200 hover:border-slate-300 text-slate-700' : ''}
                              ${isSelected && !isChecking ? 'border-slate-900 bg-slate-50 text-slate-900 shadow-[0_4px_0_0_#0f172a] -translate-y-1' : ''}
                              ${showCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-[0_4px_0_0_#10b981] -translate-y-1' : ''}
                              ${showWrong ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-[0_4px_0_0_#f43f5e] -translate-y-1' : ''}
                              ${isChecking && !showCorrect && !showWrong ? 'border-slate-100 text-slate-400 opacity-50' : ''}
                            `}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {showCorrect && <Check className="text-emerald-500" size={24} strokeWidth={3} />}
                              {showWrong && <XCircle className="text-rose-500" size={24} strokeWidth={3} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* MCQ Bottom Bar */}
                  <div className={`mt-16 px-8 md:px-20 lg:px-24 py-12 border-t border-slate-200 flex items-center justify-between transition-colors duration-300 ${isCorrect === true ? 'bg-emerald-50' :
                      isCorrect === false ? 'bg-rose-50' :
                        'bg-slate-50'
                    }`}>
                    <div>
                      {isCorrect === true && (
                        <div className="flex items-center gap-3 text-emerald-600 font-serif text-2xl tracking-tight">
                          <Check size={28} strokeWidth={3} /> Correct
                        </div>
                      )}
                      {isCorrect === false && (
                        <div className="flex items-center gap-3 text-rose-600 font-serif text-2xl tracking-tight">
                          <XCircle size={28} strokeWidth={3} /> Incorrect
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleAction}
                      disabled={selectedOption === null && !isChecking}
                      className={`
                        px-12 py-5 rounded-full font-bold text-lg tracking-wide uppercase transition-all
                        ${selectedOption === null ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : ''}
                        ${selectedOption !== null && !isChecking ? 'bg-slate-900 text-white shadow-xl hover:scale-105' : ''}
                        ${isCorrect === true ? 'bg-emerald-500 text-white shadow-xl hover:scale-105' : ''}
                        ${isCorrect === false ? 'bg-rose-500 text-white shadow-xl hover:scale-105' : ''}
                      `}
                    >
                      {!isChecking && 'Check Answer'}
                      {isChecking && isCorrect && 'Continue'}
                      {isChecking && !isCorrect && 'Try Again'}
                    </button>
                  </div>
                </motion.div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
