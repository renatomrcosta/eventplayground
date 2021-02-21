.PHONY: test-api
test-api:
	./api/gradlew -p ./api check

.PHONY: test-ui
test-ui:
	yarn --cwd ./ui test:ci
