import { ref } from 'vue'

export const users = ref([
  {
    id: '1',
    name: 'Taro Yamada',
    email: 'taro@example.com',
    address: 'Osaka, Japan',
    createdAt: '2000-01-01',
    updatedAt: '2000-02-10',
  },
  {
    id: '2',
    name: 'Hanako Suzuki',
    email: 'hanako@example.com',
    address: 'Tokyo, Japan',
    createdAt: '2010-02-01',
    updatedAt: '2011-03-10',
  },
  {
    id: '3',
    name: 'Ken Tanaka',
    email: 'ken@example.com',
    address: 'Nara, Japan',
    createdAt: '2020-04-01',
    updatedAt: '2021-05-10',
  },
])

export function getUserById(id) {
  return users.value.find(user => user.id === id)
}

export function updateUser(id, data) {
  const user = getUserById(id)
  const now = today()

  if (!user) return
  user.name = data.name
  user.email = data.email
  user.address = data.address
  user.updatedAt = now
}

export function addUser(data) {
  const now = today()

  users.value.push({
    id: Date.now().toString(), // 仮ID（APIが来たら差し替え）
    name: data.name,
    email: data.email,
    address: data.address,
    createdAt: now,
    updatedAt: now,
  })
}

export function deleteUser(id) {
  users.value = users.value.filter(user => user.id !== id)
}

function today() {
  const d = new Date()
  return d.toISOString().slice(0, 10) // YYYY-MM-DD
}