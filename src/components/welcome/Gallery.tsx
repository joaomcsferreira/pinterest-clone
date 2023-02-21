import React from "react"
import { GalleryContainer } from "./style"
import { GalleryColumn, GalleryColumnAnimated } from "./GalleryColumn"

const columns = [
  {
    id: 1,
    urls: [
      "/images/0ba539149625b147a9b90cddab645c45.jpg",
      "/images/0cfadaebaa89945afd551325d75a6e5e.jpg",
      "/images/0d4027c89fbfcf25788c6f2eda676e00.jpg",
      "/images/1a618cd8f36682cb96725c1925140a2f.jpg",
    ],
    marginTop: "70%",
  },
  {
    id: 2,
    urls: [
      "/images/ab7b146b57fc05ecbc826b4071de8e8d.jpg",
      "/images/1a3214b3d4ebc6230a3b40ee3738309c.jpg",
      "/images/1e4db0a6aca24993591b24abdb51eabc.jpg",
      "/images/2d6b5bba215f764ff03d6f4b276210c6.jpg",
    ],
    marginTop: "110%",
  },
  {
    id: 3,
    urls: [
      "/images/ac40ee0b5f6ef390267817a08518bbad.jpg",
      "/images/4a045c2574f679a23af4ddf1ef7ad6c9.jpg",
      "/images/4e7f10e5ee1e983783e08b1c6311e48b.jpg",
      "/images/4e69f1d5c625c3c6b475c29963264516.jpg",
    ],
    marginTop: "150%",
  },
  {
    id: 4,
    urls: [
      "/images/c2f898e3f96502c6367939951a8f6312.jpg",
      "/images/4f794e0333e192e618c66aa79df81432.jpg",
      "/images/5d8f396e05441ce02cf60a0ac98761e3.jpg",
      "/images/6e6f0d71fedbc745f096fc78e029c41e.jpg",
    ],
    marginTop: "190%",
  },
  {
    id: 5,
    urls: [
      "/images/ad95724c42d984bf497b713f022da48b.jpg",
      "/images/7b3c0f7ea23f58262229eccd5748223c.jpg",
      "/images/9df5039395d35e438175cb246e7da639.jpg",
      "/images/22eb73837212a3b081b6d27fd28773fe.jpg",
    ],
    marginTop: "150%",
  },
  {
    id: 6,
    urls: [
      "/images/a42794b03af4e70aabb12cb8f046d6e6.jpg",
      "/images/8b92123edb5b8bc830c8dbca3267a538.jpg",
      "/images/9b3ccbfa476eeaf8ca203b34378a3671.jpg",
      "/images/43e8586f0566075d55e2ca370c839ff0.jpg",
    ],
    marginTop: "110%",
  },
  {
    id: 7,
    urls: [
      "/images/c012f9f7d32bf6f5697e6c36659ea987.jpg",
      "/images/22f207bdbabc933b4293b4f4dc0ae49f.jpg",
      "/images/43137805a23b3e3c5238f7907cec80da.jpg",
      "/images/a2f01e52288c781082c35077339ce914.jpg",
    ],
    marginTop: "70%",
  },
]

const Gallery = () => {
  return (
    <GalleryContainer>
      {columns.map((column) => (
        <GalleryColumn key={column.id} {...column} />
      ))}
    </GalleryContainer>
  )
}

const GalleryAnimated = () => {
  return (
    <GalleryContainer>
      {columns.map((column) => (
        <GalleryColumnAnimated key={column.id} {...column} />
      ))}
    </GalleryContainer>
  )
}

export { Gallery, GalleryAnimated }
