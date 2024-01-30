import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "@/scenes/home";
import AboutUs from "./scenes/aboutUs";
import RootLayout from "./Layout/RootLayout";
import GalleryLayout from "./Layout/GalleryLayout";
import NotFound from './scenes/notFound';
import Contact from "./scenes/contact"
import Shop from "./scenes/shop";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Location isMounted={location.isMounted}>
        <Route>

        </Route>

      </Location>
    </motion.div>
  );
};

export default AnimatedRoutes;