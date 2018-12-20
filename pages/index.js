import Head from 'next/head'
import React from 'react'
import 'isomorphic-unfetch'


export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/rizasatyabudhi/GraphQL-Authentication')
    const json = await res.json()
    return { stars: json.stargazers_count, repo: json.name, author:json.owner.login, link: json.html_url }
  }


  render() {
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
        Repo Name   :{this.props.repo} <br />
        Stars Count :{this.props.stars} <br />
        Author      :{this.props.author} <br />
        Repo Link   : <a href={this.props.link} target="_blank">{this.props.link}</a>
      </div>
    )
  }
}