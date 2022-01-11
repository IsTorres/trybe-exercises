import requests
# import parsel


def fetch_content(url):
    try:
        res = requests.get(url)
        res.raise_for_status()
    
    except requests.HTTPError:
        return ""
    else:
        return res.text