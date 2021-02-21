UI_DIR=./ui
API_DIR=./api

.PHONY: test-api
test-api:
	./api/gradlew -p $(API_DIR) check

.PHONY: test-ui
test-ui:
	yarn --cwd $(UI_DIR) test:ci

.PHONY: install-ci-deps
install-ci-deps:
	yarn --cwd $(UI_DIR)
