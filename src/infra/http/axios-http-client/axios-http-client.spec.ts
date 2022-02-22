import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockerAxiosResult = { data: faker.internet.userName(), status: faker.datatype.number() }
mockedAxios.post.mockResolvedValue(mockerAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.internet.userName()
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())

    expect(httpResponse).toEqual({
      statusCode: mockerAxiosResult.status,
      body: mockerAxiosResult.data
    })
  })
})
