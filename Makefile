SHELL := /bin/bash
PNPM ?= pnpm
WASM_PACK ?= wasm-pack

.PHONY: all help install submodule build-wasm build dev start lint format clean

all: build

help:
	@echo "Available commands:"
	@echo "  make install     - Install node dependencies using pnpm"
	@echo "  make submodule   - Initialize and update git submodules"
	@echo "  make build-wasm  - Build compiler WASM package"
	@echo "  make build       - Build WASM and Next.js production bundle"
	@echo "  make dev         - Build WASM and run development server"
	@echo "  make start       - Start production server"
	@echo "  make lint        - Run linter"
	@echo "  make format      - Format code with prettier"
	@echo "  make clean       - Remove build artifacts and generated WASM"

install:
	$(PNPM) install

submodule:
	git submodule update --init --recursive

build-wasm:
	@if [ ! -f "compiler/Cargo.toml" ]; then \
		echo "Compiler submodule not found. Initializing submodule..."; \
		$(MAKE) submodule; \
	fi
	$(WASM_PACK) build compiler --target web --out-dir ../public/wasm -- --features wasm
	@rm -f public/wasm/.gitignore

build: build-wasm
	$(PNPM) run build

dev: build-wasm
	$(PNPM) run dev

start:
	$(PNPM) run start

lint:
	$(PNPM) run lint

format:
	$(PNPM) run pretty

clean:
	rm -rf .next public/wasm
