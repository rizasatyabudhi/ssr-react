import Head from 'next/head'
import React from 'react'
import Link from 'next/link'


export default class extends React.Component {


  render() {
    return (
      <div>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:title' content='RIZA' />
          <meta property='og:url' content='https://www.go-RIZA.co.id/' />
          <meta property='og:description' content='RIZA RIZA penyedia jasa layanan gaya hidup dengan 1 Juta pengguna di 16 kota. Temukan layanan pijat, kebersihan, mekanik, kecantikan, laundry, dan lainnya.' />
        </Head>
       Rizaaa page


       <Link href="/">
       <a>Back to home</a>
     </Link>
      </div>
    )
  }
}