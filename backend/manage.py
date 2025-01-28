import os
import subprocess
import click

@click.group()
def cli():
    """Command-line tool for managing the FastAPI project."""
    pass

@cli.command()
def runserver():
    """Run the FastAPI server."""
    os.system("uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload")

@cli.command()
def install():
    """Install dependencies from requirements.txt."""
    os.system("pip install -r requirements.txt")

if __name__ == "__main__":
    cli()