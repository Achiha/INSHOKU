import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

// Import your components here
import RootLayout from "./Layout/RootLayout";
import NotFound from "./scenes/notFound";
import Contact from "./scenes/contact";
import Shop from "./scenes/shop";
import Home from "@/scenes/home";
import AboutUs from "./scenes/aboutUs";
import GalleryLayout from "./Layout/GalleryLayout";
import Pics from "./scenes/gallery/Pics";
import Pic_info from "./scenes/gallery/Pic_info";
import Music from "./scenes/gallery/Music";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="/"

        element={
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          </AnimatePresence>
        }
      />

      <Route
        path="aboutus"
        element={
          <AnimatePresence>
            <motion.div
             key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutUs />
            </motion.div>
          </AnimatePresence>
        }
      />

      <Route
        path="shop"
        element={

              <Shop />

        }
      />

      <Route
        path="contact"
        element={
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={{  opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          </AnimatePresence>
        }
      />

      <Route path="gallery" element={<GalleryLayout />}>
        <Route path="pics" element={<Pics />} />
        <Route path=":id" element={<Pic_info />} />
        <Route path="music" element={<Music />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
