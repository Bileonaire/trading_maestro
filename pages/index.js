import Head from 'next/head'
import { PrismaClient } from '@prisma/client';
import { Sidebar } from '../components';

const prisma = new PrismaClient();

export default function Home({ initialContacts }) {
  return (
    <div>
      content
    </div>
  )
}

export async function getServerSideProps() {
  const contacts = await prisma.user.findMany();
  return {
    props: {
      initialContacts: contacts
    }
  };
}