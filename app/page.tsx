"use client"

import { rastreoPaquetes } from "@/actions/rastreo-paquetes-action";
import ToasterNotification from "@/components/ui/ToasterNotification";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";



export default function Home() {

redirect('/landing')

}
