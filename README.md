This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Framer Motion Simplified

## What is Framer Motion?

Framer Motion is a production-ready React animation and gesture library. Basically, it's an animation library that simplifies the process of creating animations in React.

<details>
  <summary>Animating With Framer Motion</summary></br>

  The first step to animating with Framer Motion is to import the motion component from the framer motion library.

  ```tsx
  import { motion } from 'framer-motion';
  ```

  This will be our base component for animating. It's required to make any animation with Framer Motion. From here, we can specify the type of element we want to animate.

  For example, if we want to animate a `div`, we'd use `motion.div`. One thing to understand is this doesn't do anything on its own. It's just a wrapper for the element we want to animate. We still have to create and specify the animation we want to use.

  By using `motion.div`, we can add certain props to it for animation. Most importantly is the `animate` prop.

  For example, let's say we have a box and we want to animate it to move to the right. We'd do something like this:

  ```tsx
  <motion.div
    animate={{
      x: 800,
    }}
    className='...'
  />
  ```

  This says to animate the `x` property of the element and move it `800px` to the right. We could also do `100vw` or `30rem`, etc.

  Now, let's say we also wanted to change the opacity of the box during the animation. So, we want to make it start at `0.5` opacity and end at `1` opacity. We can do that by adding another property to the `animate` prop.

  ```tsx
  <motion.div
    animate={{
      x: 800,
      opacity: 1
    }}
    className='...'
  />
  ```

  Now this is fine but we won't actually see anything because the initial opacity is also `1`. We could add some styles to make it initially `0.5` opacity but there's a better way to do this. We can use the `initial` prop.

  ```tsx
  <motion.div
    animate={{
      x: 800,
      opacity: 1,
    }}
    initial={{
      opacity: 0.1,
    }}
    className='...'
  />
  ```

  Now, we're saying the opacity is initially `0.1` and then it animates to `1`. This is a much cleaner way to do this. Now how do we actually control the speed of the animation? We can do that with the `transition` prop.

  ```tsx
  <motion.div
    animate={{
      x: 800,
      opacity: 1,
    }}
    initial={{
      opacity: 0.1,
    }}
    transition={{
      duration: 2,
    }}
    className='...'
  />
  ```

  Here, we're saying we want the animation to take `2` seconds. Now, one thing you'll notice when overriding the `transition` prop is we lose our springy kickback at the end. To fix these, we can specify a `type` property in the `transition` prop.

  The main options are `tween` and `spring`. 
  
  - `tween` is like linear and doesn't apply any physic-like effects.
  - `spring` is like a spring and applies a springy effect to the animation.

  Now one important thing to understand is that the `duration` property doesn't work with the `spring` type. Instead, we have to use the `stiffness` and `damping` properties.

  `stiffness` kind of defines the intensity of the spring. It defaults to `100`, and a higher value means a more intense spring or noticable knockback effect.

  However, a lower `stiffness` value means a less intense spring, which basically makes the animation look like it's slower.

  Something else we can add is `delay`. This is pretty self-explanatory. It delays the animation by the specified amount of time.

  ```tsx
  <motion.div
    animate={{
      x: 800,
      opacity: 1,
      rotate: 360,
    }}
    initial={{
      opacity: 0.1,
    }}
    transition={{
      type: 'spring',
      stiffness: 60,
    }}
    className='...'
  />
  ```

  Now, we have a spring like effect at the end of the animation and it rolls due to our `rotate` property in the `animate` prop.

  Now, what if we don't want to have the animation happen right away? Obviously, you could use `delay` but a better way is with React states.
</details>

<details>
  <summary>Controlling Animations</summary></br>

  To control animations, we can use React states. For example, let's say we want our box to reverse the animation if we click on it, and repeat this every time. In other words, the box should move to the right and rotate when it's clicked, and then move back to the left and rotate when it's clicked again.

  We can do this easily with a `useState` hook.

  ```tsx
  const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    return (
      <div className='pb-80'>
        <motion.div
          animate={{
            x: isAnimating ? 750 : 0,
            opacity: isAnimating ? 1 : 0.5,
            rotate: isAnimating ? 360 : 0,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: 'spring',
            stiffness: 60,
          }}
          onClick={() => setIsAnimating(isAnimating => !isAnimating)}
          className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300 cursor-pointer'
        />
      </div>
    );
  };
  ```

  Super simple actually. We just have a boolean state that we toggle when the box is clicked. Then, we use that state to determine the animation.
</details>

That's a great start but there's a lot more to Framer Motion. Let's take a look at some more advanced features like animating on events and draggables.

<details>
  <summary>Animate on Events</summary></br>

  Now, typically, with `hover` and `click` events, we would utilize CSS pseudo states. However, with Framer Motion, we can animate on these events with the `whileHover` and `whileTap` props. And it's super easy to do.

  ```tsx
  <motion.div
    whileHover={{
      scale: 1.1,
    }}
    whileTap={{
      scale: 0.9,
    }}
    className='...'
  />
  ```

  Here, we have a box that gets larger when we hover over it and smaller when we click on it. It's that simple. There are also other events we can use like `whileFocus` and `whileDrag`.

  Now, if you want something to be draggable, all we have to do is add the `drag` prop.

  ```tsx
  <motion.div
    drag
    whileHover={{
      scale: 1.1,
    }}
    whileTap={{
      scale: 0.9,
    }}
    className='...'
  />
  ```

  We can also specify dragging in only a certain direction using `drag='x'` or `drag='y'`. We can also specify a `dragConstraints` prop to limit the dragging to a certain area. It only has 4 properties: `top`, `bottom`, `left`, and `right`. So, we can do something like this.

  ```tsx
  dragConstraints={{
    right: 20,
    left: 20,
    top: 5,
    bottom: 5,
  }}
  ```

  This says we can only drag the box `20` pixels to the left and right, and `5` pixels to the top and bottom.
</details>

Let's look at propogation next and how we can animate multiple elements at once. Specifically, the animation of child elements within a parent element.

<details>
  <summary>Variants and Propogation</summary></br>

  Now, we're going to look at variants and propogation. Variants basically allow us to predefine our styles for cleaner code. For example:
  
  ```tsx
  const Box3 = () => {
    const boxVariants = {
      randomKey: {
        x: 100,
        scale: 1.5,
      },
    };

    return (
      <div className='pb-80'>
        <motion.div
          variants={boxVariants}
          animate='randomKey'
          className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
        />
      </div>
    );
  };
  ```

  This will make the box move to the right and scale up because we pass in the variants through the `variants` prop and specify which variant to use with the `animate` prop.

  We can also transition from one variant state to another like so:

  ```tsx
  const Box3 = () => {
    const boxVariants = {
      bigger: {
        x: 100,
        scale: 1.5,
      },
      smaller: {
        x: 1000,
        scale: 0.3,
      },
    };

    return (
      <div className='pb-80'>
        <motion.div
          variants={boxVariants}
          initial='bigger'
          animate='smaller'
          transition={{ delay: 0.2, duration: 1 }}
          className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
        />
      </div>
    );
  };
  ```
  
  Variants are basically a way to group animations together. For example, let's say we have a parent element with 2 child elements. We want to animate the parent element and the child elements afterwards. We can do this with variants.

  First, let's look at a less contrived example. We have a box that we want to slide in from the left. From there, we want the smaller boxes inside of it to appear one by one.

  ```tsx
  const Box3 = () => {
    const boxVariants = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
            },
        },
    };

    return (
        <div className='pb-80'>
            <motion.div
                variants={boxVariants}
                animate='visible'
                initial='hidden'
                className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'>
                {[...Array(3)].map((_, i) => (
                    <motion.li
                        key={i}
                        className='w-2 aspect-[1/1] bg-white p-8 list-none m-2'
                    />
                ))}
            </motion.div>
        </div>
    );
  };
  ```

  Now this is pretty simple. We use a `hidden` and `visible` variant for the appropriate states. Notice that we can put a `transition` property inside a variant as well.

  Something to understand here that isn't obvious is that any `motion` children inside of a `motion` parent will inherit the props of the parent. In other words, every `motion.li` element inside the `motion.div` will inherit the `variants`, `animate`, and `initial` props. This is called propogation.

  We can use this to our advantage by creating a `variants` object for the children as well.

  ```tsx
  const listVariants = {
      hidden: {
          x: -10,
          opacity: 0,
      },
      visible: {
          x: 0,
          opacity: 1,
          transition: {
              delay: 1,
          },
      },
  };
  ```

  Notice that it has the same `hidden` and `visible` keys. This is essential because those props are inherited from the parent. Here, we want the smaller boxes to slide in from the left (but not by much) and they should appear using `opacity`. We also want them to appear after the parent box has finished animating so we add a `delay` of `1` second instead of `0.5`.

  Also, we need to make sure to override the `variants` prop of the children with our new `listVariants` object.

  ```tsx
  <motion.li
    variants={listVariants}
    key={i}
    className='w-2 aspect-[1/1] bg-white p-8 list-none m-2'
  />
  ```

  Now this concept of hardcoding delays isn't actually the best way to do things. We can use the `when` keyword and `staggerChildren` to make things easier.

  ```tsx
  const boxVariants = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
  };
  ```

  Here, I use the `when` keyword to specify that the parent should animate before the children. In other words, the children shouldn't start animating until the parent's animation is done. By doing this, we can remove the delay from our `listVariants` entirely.

  Also, we add `staggerChildren` to specify that each child should animate after the previous one by a delay of `0.2` seconds.
</details>

<details>
  <summary>Keyframes in Framer Motion</summary></br>

  In Framer Motion, we can also utilize arrays to pass multiple values that we want the component to animate to throughout the animation. This is a very easy way of doing keyframes.

  ```tsx
  const Box4 = () => {
    const boxVariants: Variants = {
      show: {
        scale: [1, 1.4, 1.4, 1, 1],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              rotate: [0, 0, 270, 270, 0],

        transition: {
          duration: 2,
        },
      },
    };

    return (
      <div className='pb-80'>
        <motion.div
          variants={boxVariants}
          animate='show'
          className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
        />
      </div>
    );
  };
  ```

  Here, we say we want the box to get larger to `1.4`, sit there for a bit, then go back to its original size. We also want the box to rotate 270 degrees and then go back to its original rotation.
</details>

## React Hooks and Framer Motion

<details>
  <summary>useAnimation</summary></br>

  We can use the `useAnimation` hook to animate a component. This is useful if we want to animate elements based on some event. It returns a set of controls that we can use to animate the component.

  ```tsx
  const Box5 = () => {
    const controls = useAnimation();

    const handleAnimate = () => {
      controls.start({
        x: 100,
        transition: {
          duration: 2,
        },
      });
    };

    return (
      <div className='pb-80'>
        <motion.div
          animate={controls}
          className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
        />
        <button onClick={handleAnimate}>Animate</button>
      </div>
    );
  };
  ```

  Pretty simple. We have an `onClick` event that starts the animation. We can also use the `stop` method to stop the animation.
</details>

<details>
  <summary>useAnimate</summary></br>

  We can use the `useAnimate` hook to animate a component. This is useful if we want to animate elements scoped within a component.

  It provides two values: a `scope` ref and an `animate` function to which we pass a DOM selector and every element that matches that selector (as long as it's within the scoepd element) will be animated to the specified variant.

  Consider the following example:

  ```tsx
  const Example = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate('li', { opacity: 1 })
    }, [])

    return (
      <ul ref={scope}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    )
  }
  ```

  `scope` acts just like `useRef`, so we could also pass in `scope.current` to the `animate` function. Here, all the `li` elements **_WITHIN_** the `ul` element will be animated to `opacity: 1`. If we had more `li` elements outside of the `ul` element, they would not be animated.

  This is particularly useful when combined with other hooks like `useInView` to animate elements when they enter the viewport.
</details>

<details>
  <summary>Scroll-triggered animations with useInView</summary></br>

  We can use the `useInView` hook to determine if an element is in the viewport. It takes a single argument which is a ref to the element we want to check and returns a boolean value that is `true` if the element is in the viewport and `false` if it is not.

  ```tsx
  const Component = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    
    useEffect(() => {
      if (isInView) {
        animate(scope.current, { opacity: 1 })
      }
    }, [isInView])
    
    return (
      <ul ref={scope}>
        <li />
        <li />
        <li />
      </ul>
    )
  }
  ```

  Here, we also combine the `useAnimate` hook and animate the `ul` element once it enters the viewport.
</details>

<details>
  <summary>Exit animations with usePresence</summary></br>

  One of the hardest things in React and CSS in general is animating elements when they are removed from the DOM. We can use the `usePresence` hook to do this.

  It returns an `isPresent` boolean value and a `safeToRemove` function. The `isPresent` value is `true` if the element is in the DOM and `false` if it is not. The `safeToRemove` function is used to remove the element from the DOM once the exit animation is complete.

  ```tsx
  const Component = () => {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()
    
    useEffect(() => {
      if (isPresent) {
        const enterAnimation = async () => {
          await animate(scope.current, { opacity: 1 })
          await animate("li", { opacity: 1, x: 0 })
        }
        enterAnimation()

      } else {
        const exitAnimation = async () => {
          await animate("li", { opacity: 0, x: -100 })
          await animate(scope.current, { opacity: 0 })
          safeToRemove()
        }
        
        exitAnimation()
      }
    }, [isPresent])
    
    return (
      <ul ref={scope}>
        <li />
        <li />
        <li />
      </ul>
    )
  }
  ```

  Here, we first check if the element is present using `isPresent`. If it is, we animate the `li` children of the `ul` element. If it's not, we run our exit animation and call `safeToRemove` once it's complete.

  To use this hook, we need to wrap our component in an `AnimatePresence` component.

  ```tsx
  <AnimatePresence>
    {show && <Component />}
  </AnimatePresence>
  ```
</details>

<details>
  <summary>Scroll-linked animations and useScroll</summary></br>

  The final thing worth taking a look at is the `useScroll` hook. It returns the scroll position of the page. It returns an object with `x` and `y` values.

  This is particularly useful for creating a horizontal scroll effect. In other words, a constantly filling horizontal bar that is proportional to the scroll position of the page.

  ```tsx
  const { scrollYProgress } = useScroll();

  return <motion.div style={{ scaleX: scrollYProgress }} />
  ```

  Here, we use the `scrollYProgress` value to scale the `div` element. As we scroll down the page, the `div` element will get larger and larger.
</details>