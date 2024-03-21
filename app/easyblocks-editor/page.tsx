"use client"
import { EasyblocksEditor } from "@easyblocks/editor";
import { components } from "../easyBlocks/components/components";
import { easyblocksConfig } from '../easyblocks.config';



export default function EeasyblocksEditorPage() {



  return (
    <EasyblocksEditor
      config={easyblocksConfig}
      components={components}
      __debug={true}
    />
  );
}