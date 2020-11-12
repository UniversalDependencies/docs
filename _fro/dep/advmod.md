---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---
 
An adverbial modifier (`advmod`) of a word is a (non-clausal) adverb or adverbial phrase that serves to modify a predicate or a modifier word.

~~~ conllu
# visual-style 3 1 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	Puis	_	ADV	ADVgen	_	3	advmod	_	_
2	se	_	PRON	PROper	_	3	expl	_	_
3	remaint	_	VERB	VERcjg	_	0	root	_	_

~~~

This relation is used for adverbs of negation too.

~~~ conllu
# visual-style 6 3 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	Car	_	CCONJ	CONcoo	_	6	cc:nc	_	_
2	amors	_	NOUN	NOMcom	_	6	nsubj	_	_
3	ne	_	ADV	ADVneg	_	6	advmod	_	_
4	se	_	PRON	PROper	_	6	Rfc	_	_
5	puet	_	VERB	VERcjg	_	6	aux	_	_
6	celer	_	VERB	VERinf	_	0	root	_	_

~~~

`advmod` relations are modifiers of predicates and modifiers of other modifier words like adjectives or adverbs too.

~~~ conllu
# visual-style 7 6 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	Et	_	CCONJ	CONcoo	_	7	cc:nc	_	_
2	il	_	PRON	PROper	_	7	nsubj	_	_
3	i	_	PRON	PROadv	_	7	obl	_	_
4	est	_	VERB	VERcjg	_	7	aux	_	_
5	mot	_	ADV	ADVgen	_	6	advmod	_	_
6	tost	_	ADV	ADVgen	_	7	advmod	_	_
7	venuz	_	VERB	VERppe	_	0	root	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
