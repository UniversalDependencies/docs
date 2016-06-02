---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
---

Regenerated <time class="timeago" datetime="2016-06-02T20:43:36Z">2016-06-02T20:43:36 zulu</time>

Traceback (most recent call last):
  File "docs-pages-source/gen_index/syn_validation_run.py", line 262, in <module>
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
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 133, in compose_mapping_node
    item_value = self.compose_node(node, item_key)
  File "build/bdist.linux-x86_64/egg/yaml/composer.py", line 64, in compose_node
    if self.check_event(AliasEvent):
  File "build/bdist.linux-x86_64/egg/yaml/parser.py", line 98, in check_event
    self.current_event = self.state()
  File "build/bdist.linux-x86_64/egg/yaml/parser.py", line 449, in parse_block_mapping_value
    if not self.check_token(KeyToken, ValueToken, BlockEndToken):
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 116, in check_token
    self.fetch_more_tokens()
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 232, in fetch_more_tokens
    return self.fetch_tag()
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 633, in fetch_tag
    self.tokens.append(self.scan_tag())
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 969, in scan_tag
    handle = self.scan_tag_handle('tag', start_mark)
  File "build/bdist.linux-x86_64/egg/yaml/scanner.py", line 1380, in scan_tag_handle
    self.get_mark())
ScannerError: while scanning a tag
  in "/home/ginter/UD_PROJHOOK/docs-pages-source/gen_index/stests.yaml", line 103, column 9
expected '!', but found '&'
  in "/home/ginter/UD_PROJHOOK/docs-pages-source/gen_index/stests.yaml", line 103, column 13
