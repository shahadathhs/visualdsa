def linear_search(arr, target):
    for i, val in enumerate(arr):
        yield {"index": i, "message": f"Compare {val} to {target}"}
        if val == target:
            yield {"found": i, "message": "Target found!"}
            return i
    yield {"message": "Not found"}
