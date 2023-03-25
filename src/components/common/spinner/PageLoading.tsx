import { useEffect, useState } from "react";

export function PageLoading() {
  const pageLoading = false;

  return (
    <>
      <div
        style={{
          opacity: +pageLoading,
          overflow: "hidden",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(7px)",
          position: "absolute",
          zIndex: 10,
          transition: "all .25s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "rgba(42,142,255,0.65)",
        }}
      />

      <div
        style={{
          height: "3px",
          width: pageLoading ? "100%" : "0",
          background: "var(--main-color)",
          transition:
            "width 4s cubic-bezier(0.65, 0, 0.35, 1)," +
            " top .15s ease .2s, opacity .15s ease",
          position: "fixed",
          top: pageLoading ? 0 : "-5px",
          left: 0,
          zIndex: 100001,
        }}
      >
        <div
          className={
            "absolute -right-0.5 -top-1.5 h-1 w-4" +
            " overflow-visible bg-transparent transition-shadow"
          }
          style={{
            boxShadow: pageLoading
              ? "0px 0 10px 3px rgba(42,142,255,0.75)"
              : "none",
          }}
        />
      </div>
      <div
        style={{
          height: "3px",
          width: pageLoading ? 0 : "100%",
          background: "var(--main-color)",
          transition: "width .2s ease, top .15s ease .2s",
          position: "fixed",
          top: pageLoading ? 0 : "-5px",
          left: 0,
          zIndex: 100002,
        }}
      />
    </>
  );
}
