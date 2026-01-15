# ♾️ CI/CD & Observability Suite

![Pipeline Status](https://github.com/vtmarkop/cicd-ops-suite/actions/workflows/pipeline.yml/badge.svg)

## 📋 Project Overview
This repository demonstrates the **"Integrator"** role in modern Quality Engineering. It connects application code with **Automated CI Pipelines** and **Observability Infrastructure**.

## 🏗️ Architecture
1.  **Application:** Node.js Express API with custom Prometheus metrics.
2.  **Infrastructure:** Dockerized services managed via Docker Compose.
3.  **Observability:** Prometheus (Metric Scraping) + Grafana (Visualization).
4.  **Pipeline:** GitHub Actions for testing, linting, and container security scanning.

# 1. Create Directories
mkdir -p cicd-ops-suite/.github/workflows
mkdir -p cicd-ops-suite/app
mkdir -p cicd-ops-suite/monitoring/prometheus
mkdir -p cicd-ops-suite/monitoring/grafana

# 2. Change into directory
cd cicd-ops-suite

# 3. Create .gitignore (CRITICAL STEP - PREVENTS CI CRASH)
cat <<EOF > .gitignore
node_modules/
npm-debug.log
.DS_Store
.env
coverage/
