---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

**Dealing With Portmanteau Tags**

There are two modes of annotation: using portmanteau dependency tags, and pure universal dependencies.

*Portmanteau token tags and their functions*

For portmanteau tags, tokens which carry a fused portmanteau POS tag receive the function associated with the lexical or argument bearing component. For example, the fused form ⲉⲕϣⲁⲛ 'if-you-if', which is tokenized as one token with the POS tag ACOND_PPERS, is both an auxiliary and a subject pronoun. Since the subject is an argument, it receives the label `nsubj`, rather than the function word label `aux`.

Alternatively, if the intended application of the annotation project supports sub-tokenization, the CoNLL-U format could be used as follows, specifying subtokens/supertokens for fused units:

| :----- | :------- | :----- | :----- | :----- | :----- | :----- | :----- | :----- |
| 1-2   | ⲉⲕϣⲁⲛ   	| _      	| _     	| _   	| _		| _   	| _	| _ |
| 1     | ⲉⲣϣⲁⲛ   	| _   	| ACOND 	| _	| _   	| 3   	| aux	| _ |
| 2     | ⲕ   	| _    	| PPERS 	| _  	| _       	| 3	| nsubj	| _ |
| 3     | ⲥⲱⲧⲙ   |	_    	| V	| _	| _		| 0   	| root	| _ |

However in practice, the Coptic Treebank uses super tokens to express bound groups, so we prefer the following analysis:

| :----- | :------- | :----- | :----- | :----- | :----- | :----- | :----- | :----- |
| 1-2   | ⲉⲕϣⲁⲛⲥⲱⲧⲙ   	| _      	| _     	| _   	| _		| _   	| _	| _ |
| 1     | ⲉⲕϣⲁⲛ   	| _   	| ACOND_PPERS 	| _	| _   	| 2   	| nsubj	| _ |
| 2     | ⲥⲱⲧⲙ   	| _    	| PPERS 	| _  	| _       	| 0	| root	| _ |

This is the type of analysis found in the Coptic Scriptorium treebank.
