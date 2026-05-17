FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Placeholder for now because we don't have a python service, putting main.py as standard
# change later after creating python service
CMD ["python", "main.py"]
