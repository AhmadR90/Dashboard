import React from 'react'
import Card from './Card'
import {
    FaHome,
    FaUsers,
    FaBook,
    FaLayerGroup,
    FaRegQuestionCircle,
    FaComments,
    FaBoxes
  } from "react-icons/fa";
  import { IoMdSettings } from "react-icons/io";
  import Logo from "../assets/Logo.png"

const Dummy = () => {
  return (
    <div>
      <section>
        <div className='flex gap-2'>
          <img  className="h-20 w-20" src={Logo} alt="" />
        <h1 className="text-2xl font-bold text-white mt-4">Welcome, Wasi!</h1>

        </div>
          <h2 className="text-lg font-semibold ">Administration</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card icon={<FaBook />} title="Courses" description="Create and manage courses" />
            <Card icon={<IoMdSettings />} title="Modules" description="Create and manage modules" />
            <Card icon={<FaBoxes />} title="Bundles" description="Group courses with bundles" />
            <Card icon={<FaUsers />} title="Your Members" description="Manage your members" />
            <Card icon={<FaLayerGroup />} title="Hubs" description="Dashboard for your members" />
            <Card icon={<FaUsers />} title="Your Team" description="Manage your colleagues" />
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Functions</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card icon={<FaComments />} title="Feedbacks" description="View members feedback" />
            <Card icon={<FaRegQuestionCircle />} title="Questions" description="View members queries" />
          </div>
        </section>
    </div>
  )
}

export default Dummy
