import { Dispatch, SetStateAction } from 'react'
import { pureAddUser } from '../GreetingContainer'

let name: string
const setName: Dispatch<SetStateAction<string>> = (a: SetStateAction<string>) => {
	if (typeof a === 'string') {
		name = a
	} else {
		name = a(name)
	}
}
let error: string
const setError: Dispatch<SetStateAction<string>> = (a: SetStateAction<string>) => {
	if (typeof a === 'string') {
		error = a
	} else {
		error = a(error)
	}
}
let added: boolean
const addUserCallback = () => {
	added = true
}

beforeEach(() => {
	name = ''
	error = ''
	added = false
})

test('name 1', () => {
	name = '1'
	pureAddUser(name, setError, setName, addUserCallback)
	expect(name).toBe('')
	expect(error).toBe('')
	expect(added).toBe(true)
})
test('name 2', () => {
	name = ''
	pureAddUser(name, setError, setName, addUserCallback)
	expect(name).toBe('')
	expect(error).toBe('Ошибка! Введите имя!')
	expect(added).toBe(false)
})
test('name 3', () => {
	name = '    '
	pureAddUser(name, setError, setName, addUserCallback)
	expect(name).toBe('    ')
	expect(error).toBe('Ошибка! Введите имя!')
	expect(added).toBe(false)
})