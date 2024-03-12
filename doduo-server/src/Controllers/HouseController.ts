import express, { Express, Request, Response, Router } from "express";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function create(request: Request, response: Response) {
  let house: Prisma.HouseCreateInput

  try{
    if (!request.body.name) {
      return response.status(400).send('Invalid name')
    }
  
    house = {
      name: request.body.name
    }
  
    const createHouse = await prisma.house.create({ data: house })
    return response.status(200).send(createHouse)
  } catch (err) {
    if (err instanceof Error) {
      return response.status(404).send(err.message)
    }
  }
}

async function get(request: Request, response: Response) {
  const house = await prisma.house.findUnique({ where: {
    id: Number(request.params.id)
  }})

  if(!house){
    return response.status(400).send('House ' + request.params.id + ' not found')
  }

  return response.status(200).send(house)
}

export { create, get }