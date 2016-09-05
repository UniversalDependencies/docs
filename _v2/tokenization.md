---
layout: base
title:  'Tokenization in UD v2'
---

# Tokenization in UD v2

We need to be able to handle the whole spectrum from multitoken words in Vietnamese to multiword
tokens in Turkish. Ideally, we should also set up more substantial criteria for when to split
tokens into words and vice versa. On this issue, there is a relevant
[paper dealing with the Turkish case](http://coltekin.net/cagri/tmp/ig-paper.pdf).
See also the report from the Uppsala meeting: [tokenization](../2015-08-23-uppsala/tokenization.html).

**Chris' thoughts:** Lots of difficult issues. For what counts as a word, I think we should be cautious in splitting up words into morpheme-level tokens. Much recent generative linguistics work assumes this as a default and we should be cautious about buying into weak arguments for doing so. That is, we should mainly follow the lexicalist orientation of UD. *However*, I think that sometimes things do need to be split off. The clearest cases are syntactic clitics, such as auxiliaries or the possessive clitic in English or things like conjunction clitics in Arabic. I can believe that some splitting is needed in Turkish but we should be cautious and not do too much. I'll have to go read the paper....  The other big issue is whether to keep or to abandon the claim of not allowing spaces in tokens or not. It is very convenient for processing. I think it is wrong for some languages like Vietnamese. We could abandon it entirely - and then we should get rid of [u-dep/goeswith]() - or we could say that it is true of most languages and keep their tokenization simple, and keep `goeswith` for occasional exceptions or typing errors, but accept that just as some languages like Chinese need a complex word segmentation process, other languages like Vietnamese would need a complex "word grouping" process.
