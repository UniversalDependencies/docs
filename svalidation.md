Traceback (most recent call last):
  File "docs-pages-source/gen_index/syn_validation_run.py", line 255, in <module>
    tests=yaml.load(t)
  File "build/bdist.linux-x86_64/egg/yaml/__init__.py", line 71, in load
    return loader.get_single_data()
  File "build/bdist.linux-x86_64/egg/yaml/constructor.py", line 37, in get_single_data
    node = self.get_single_node()
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 36, in get_single_node
    document = self.compose_document()
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 55, in compose_document
    node = self.compose_node(None, None)
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 82, in compose_node
    node = self.compose_sequence_node(anchor)
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 111, in compose_sequence_node
    node.value.append(self.compose_node(node, index))
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 84, in compose_node
    node = self.compose_mapping_node(anchor)
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 127, in compose_mapping_node
    while not self.check_event(MappingEndEvent):
  File "build/bdist.linux-x86_64/egg/yaml/parser.py", line 98, in check_event
    self.current_event = self.state()
  File "build/bdist.linux-x86_64/egg/yaml/parser.py", line 428, in parse_block_mapping_key
    if self.check_token(KeyToken):
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 116, in check_token
    self.fetch_more_tokens()
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 220, in fetch_more_tokens
    return self.fetch_value()
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 580, in fetch_value
    self.get_mark())
ScannerError: mapping values are not allowed here
  in "/home/ginter/UD_PROJHOOK/docs-pages-source/gen_index/stests.yaml", line 182, column 312
