

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1315 nodes (14%) are attached to their parents as `root`.

1315 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.65019011406844.

The following 10 pairs of parts of speech are connected with `root`: [et-pos/ROOT]()-[et-pos/VERB]() (1269; 97% instances), [et-pos/ROOT]()-[et-pos/NOUN]() (19; 1% instances), [et-pos/ROOT]()-[et-pos/ADJ]() (13; 1% instances), [et-pos/ROOT]()-[et-pos/ADV]() (4; 0% instances), [et-pos/ROOT]()-[et-pos/PART]() (3; 0% instances), [et-pos/ROOT]()-[et-pos/NUM]() (2; 0% instances), [et-pos/ROOT]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ROOT]()-[et-pos/AUX]() (1; 0% instances), [et-pos/ROOT]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ROOT]()-[et-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Lennarti-lood	Lennarti-lood	NOUN	n/com,pl,nom,%cap	Case=Nom|Number=Plur	2	nsubj	_	_
2	on	ole+0	VERB	v/main,indic,pres,ps3,pl,ps,af	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aga	aga+0	CONJ	conj-s/crd	_	2	mark	_	_
4	nagu	nagu+0	SCONJ	conj-s/sub	_	7	mark	_	_
5	pikantne	pikantne+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
6	prantsuse	prantsuse+0	ADJ	adj-nat/--	NameType=Nat	7	amod	_	_
7	film	film+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	2	nmod	_	_
8	.	--	PUNCT	punc/--	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Telia	Telia+0	PROPN	prop/--	_	2	nmod	_	_
2	topeltmäng	topelt_mäng+0	NOUN	n/--	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Klaasid	klaas+d	NOUN	n/com,pl,nom,.cap	Case=Nom|Number=Plur	4	nsubj	_	_
2	on	ole+0	VERB	v-fin/main,indic,pres,ps3,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	täis	täis+0	ADV	adv/--	_	4	advmod	_	_
4	valatud	vala=tud+0	ADJ	adj/pos,.tud,partic	Degree=Pos|VerbForm=Part	0	root	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	4	punct	_	_

~~~


