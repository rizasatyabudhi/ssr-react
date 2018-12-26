import Head from 'next/head'
import React from 'react'
import 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://geek-jokes.sameerkumar.website/api')
    const json = await res.json()
    return { joke: json }
  }


  render() {
    console.log(this.props.joke);
    return (
      <div>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:title' content='Penyedia Jasa Layanan Gaya Hidup On Demand | GO-LIFE' />
          <meta property='og:url' content='https://www.go-life.co.id/' />
          <meta property='og:description' content='Aplikasi penyedia jasa layanan gaya hidup dengan 1 Juta pengguna di 16 kota. Temukan layanan pijat, kebersihan, mekanik, kecantikan, laundry, dan lainnya.' />
        </Head>
        <b>Today's Joke : </b> {this.props.joke}

        <br />
        <Link href="/riza">
        <a>riza</a>
      </Link>
      </div>
    )
  }
}