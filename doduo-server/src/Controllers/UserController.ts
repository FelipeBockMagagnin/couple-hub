import express, { Express, Request, Response, Router } from "express";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function loginOrCreate(request: Request, response: Response) {
  let user: Prisma.UserCreateInput

  try{
    if (!request.body.email) {
      return response.status(400).send('Invalid email')
    }
  
    if (!request.body.google_id) {
      return response.status(400).send('Invalid google id')
    }
  
    if (!request.body.name) {
      return response.status(400).send('Invalid name')
    }
  
    user = {
      email: request.body.email,
      googleId: request.body.google_id,
      name: request.body.name
    }
  
    const createUser = await prisma.user.create({ data: user })
    return response.status(200).send(createUser)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        return response.status(404).send('A user already exists with this ' + err?.meta?.target)
      }
      return response.status(404).send(err)
    }
    if (err instanceof Error) {
      return response.status(404).send(err.message)
    }
  }
}

async function get(request: Request, response: Response) {
  const user = await prisma.user.findUnique({ where: {
    id: Number(request.params.id)
  }})

  if(!user){
    return response.status(400).send('User ' + request.params.id + ' not found')
  }

  return response.status(200).send(user)
}

async function update(request: Request, response: Response) {
  if (!request.body.house_id) {
    return response.status(400).send('Invalid house id')
  }

  const updateUser = await prisma.user.update({
    where: {
      id: Number(request.params.id),
    },
    data: {
      houseId: request.body.house_id,
    },
  })

  if(!updateUser){
    return response.status(400).send('User ' + request.params.id + ' not found')
  }

  return response.status(200).send(updateUser)
}

export { loginOrCreate, get, update }