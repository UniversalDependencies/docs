---
layout: base
title:  'Tokenization'
permalink: cop/overview/tokenization.html
---

# Tokenization

**Dealing With Portmanteau Tags**

There are two modes of annotation: using portmanteau dependency tags, and pure universal dependencies.

*Portmanteau functions*

For portmanteau tags, tokens which carry a fused portmanteau POS tag receive both functions associated with those components, separated by an underscore. For example, the form ⲉⲕϣⲁⲛ, which is tokenized as one fused token with the POS tag ACOND_PPERS, is both an auxiliary and a subject pronoun. Therefore, its associated verb dominates it as aux_nsubj, by analogy to the POS tag.

*Pure universal dependencies*

When using pure dependencies, more ‘lexical’ functions trump more ‘grammatical’ ones, so that examples like ACOND_PPERS are still labeled nsubj, omitting the aux label entirely. This preserves the pure universal dependency tag set. 

Alternatively, if the intended application of the annotation project supports sub-tokenization, the CoNLL-U format can be used as follows, specifying subtokens/supertokens for fused units:

|1-2   |ⲉⲕϣⲁⲛ   	|_      	|_     	|_   	|_		|_   	|_	|_
|1     |ⲉⲣϣⲁⲛ   	|_   	|ACOND 	|_	|_   	|3   	|aux	|_
|2     |ⲕ   	|_    	|PPERS 	|_  	|_       	|3	|nsubj	|_
|3     |ⲥⲱⲧⲙ   |	_    	|V	|_	|_		|0   	|root	|_
