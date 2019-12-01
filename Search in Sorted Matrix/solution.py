def search_in_sorted_matrix(matrix, target):
  row = 0
  col = len(matrix[0]) - 1
  while col >= 0 and row < len(matrix):
    if matrix[row][col] > target:
      col -= 1
    elif matrix[row][col] < target:
      row += 1
    else:
      return [row, col]
  return [-1, -1]

matrix = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025],
]

print(search_in_sorted_matrix(matrix, 33))
print(search_in_sorted_matrix(matrix, 34))
print(search_in_sorted_matrix(matrix, 1025))
print(search_in_sorted_matrix(matrix, 997))
print(search_in_sorted_matrix(matrix, 1))
print(search_in_sorted_matrix(matrix, 5))