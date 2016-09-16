

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [mark]().

400 nodes (0%) are attached to their parents as `mark:comparator`.

391 instances of `mark:comparator` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8275.

The following 15 pairs of parts of speech are connected with `mark:comparator`: [fi-pos/NOUN]()-[fi-pos/SCONJ]() (166; 42% instances), [fi-pos/VERB]()-[fi-pos/SCONJ]() (91; 23% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (36; 9% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (33; 8% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (24; 6% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (20; 5% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (9; 2% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (8; 2% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (4; 1% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (3; 1% instances), [fi-pos/NUM]()-[fi-pos/SCONJ]() (2; 1% instances), [fi-pos/ADJ]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark:comparator	color:blue
1	toimikunta	toimikunta	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	_
3	kokoonpanoltaan	kokoonpano	NOUN	N,Sg,Abl,Px3	Case=Abl|Number=Sing|Person[psor]=3	5	nmod	_	_
4	hieman	hieman	ADV	Adv	_	5	advmod	_	_
5	laajempi	laaja	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
6	kuin	kuin	SCONJ	Pcle,CS	_	7	mark:comparator	_	_
7	edeltäjänsä	edeltäjä	NOUN	N,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	5	advcl:compar	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark:comparator	color:blue
1	koe	koe	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	3	aux	_	_
3	onnistunut	onnistua	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	paremmin	paremmin	ADV	Adv,Cmp	Degree=Cmp	3	advmod	_	_
5	kuin	kuin	SCONJ	Pcle,CS	_	7	mark:comparator	_	_
6	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	aux	_	_
7	odotettu	odottaa	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	4	advcl:compar	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark:comparator	color:blue
1	Kooltaan	koko	NOUN	N,Sg,Abl,Px3	Case=Abl|Number=Sing|Person[psor]=3	5	nmod	_	_
2	Ylöjärvi	ylöjärvi	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	nsubj	_	_
3	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	_
4	hieman	hieman	ADV	Adv	_	5	advmod	_	_
5	pienempi	pieni	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
6	kuin	kuin	SCONJ	Pcle,CS	_	7	mark:comparator	_	_
7	Seinäjoki	seinäjoki	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	advcl:compar	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


