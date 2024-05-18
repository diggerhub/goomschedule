"use client"


import React from "react";
import useScheduleStore from "../../state/schedule";
import DesignDisplay from "@repo/ui/DesignDisplay";
import HeaderController from "@repo/ui/HeaderController";
import DateController from "@repo/ui/DateController";
import SocialsController from "@repo/ui/SocialsController";
import BackgroundController from "@repo/ui/BackgroundController";

const Page: React.FC = ({}) => {
  const {
    templates,
    timeZones,
    headerDesign,
    setMainHeader,
    setHeaderColor,
    setHeaderBackgroundColor,
    setHeaderAlignment,
    setHeaderSize,
    setSubHeaderSize,
    dateDesign,
    setDateAlignment,
    socials,
    addSocials,
    socialsDesign,
    setSocialsAlignment,
    removeSocials,
    backgroundDesign,
    setBackgroundColor,
    setBackgroundSize,
    setBackgroundPosition,
    setDateDescriptionColor,
    setDateDescriptionTextColor,
    setDateDayColor,
    setDateDayTextColor
  } = useScheduleStore()

  return <main className='main'>
    <HeaderController
      headerDesign={headerDesign}
      setMainHeader={setMainHeader}
      setHeaderColor={setHeaderColor}
      setHeaderBackgroundColor={setHeaderBackgroundColor}
      setHeaderAlignment={setHeaderAlignment}
      setHeaderSize={setHeaderSize}
      setSubHeaderSize={setSubHeaderSize}
    />
    <DateController
      dateDesign={dateDesign}
      setDateAlignment={setDateAlignment}
      setDateDescriptionColor={setDateDescriptionColor}
      setDateDescriptionTextColor={setDateDescriptionTextColor}
      setDateDayColor={setDateDayColor}
      setDateDayTextColor={setDateDayTextColor}
    />
    <SocialsController
      socials={socials}
      addSocials={addSocials}
      removeSocials={removeSocials}
      socialsDesign={socialsDesign}
      setSocialsAlignment={setSocialsAlignment}
    />
    <BackgroundController
      backgroundDesign={backgroundDesign}
      setBackgroundColor={setBackgroundColor}
      setBackgroundSize={setBackgroundSize}
      setBackgroundPosition={setBackgroundPosition}
    />
    <DesignDisplay
      templates={templates}
      timeZones={timeZones}
      headerDesign={headerDesign}
      socials={socials}
      socialsDesign={socialsDesign}
      dateDesign={dateDesign}
      backgroundDesign={backgroundDesign}
    />
  </main>
}

export default Page
