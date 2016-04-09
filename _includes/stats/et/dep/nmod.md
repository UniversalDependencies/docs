

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

2345 nodes (25%) are attached to their parents as `nmod`.

1465 instances of `nmod` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03752665245203.

The following 30 pairs of parts of speech are connected with `nmod`: [et-pos/VERB]()-[et-pos/NOUN]() (1396; 60% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (275; 12% instances), [et-pos/NOUN]()-[et-pos/PRON]() (139; 6% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (106; 5% instances), [et-pos/VERB]()-[et-pos/PRON]() (99; 4% instances), [et-pos/VERB]()-[et-pos/PROPN]() (96; 4% instances), [et-pos/NUM]()-[et-pos/NOUN]() (54; 2% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (46; 2% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (31; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (26; 1% instances), [et-pos/PRON]()-[et-pos/NOUN]() (23; 1% instances), [et-pos/NOUN]()-[et-pos/ADV]() (13; 1% instances), [et-pos/ADV]()-[et-pos/NOUN]() (12; 1% instances), [et-pos/NUM]()-[et-pos/ADV]() (6; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/SCONJ]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/X]() (2; 0% instances), [et-pos/NUM]()-[et-pos/PRON]() (2; 0% instances), [et-pos/NUM]()-[et-pos/X]() (2; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (2; 0% instances), [et-pos/SCONJ]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/X]() (1; 0% instances), [et-pos/SCONJ]()-[et-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod	color:blue
1	66-aastane	66-aastane+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	Heino	Heino+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	3	nsubj	_	_
3	sisenes	sisene+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	Küütri	Küütri+0	PROPN	prop/prop,sg,gen,.cap,.?	Case=Gen|Number=Sing	5	nmod	_	_
5	tänavas	tänav+s	NOUN	n/com,sg,in	Case=Ine|Number=Sing	3	nmod	_	_
6	oma	oma+0	PRON	pron-poss/pos,det,refl,sg,gen	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	nmod	_	_
7	kodumaja	kodu-maja+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	8	nmod	_	_
8	trepikotta	trepi-koda+0	NOUN	n/com,sg,adit	Case=Add|Number=Sing	3	nmod	_	_
9	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Teised	teine+d	PRON	pron/indef,pl,nom,%cap	Case=Nom|Number=Plur|PronType=Ind,Neg	2	nmod	_	_
2	pakkujad	pakku=ja+d	NOUN	n/com,pl,nom,%ja	Case=Nom|Number=Plur	3	nsubj	_	_
3	noolisid	nooli+sid	VERB	v/main,indic,impf,ps3,pl,ps,af	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ainult	ainult+0	ADV	adv/--	_	3	advmod	_	_
5	rahvusvahelist	rahvus_vahe=line+t	ADJ	adj/pos,sg,part	Case=Par|Degree=Pos|Number=Sing	6	amod	_	_
6	sidet	side+t	NOUN	n/com,sg,part	Case=Par|Number=Sing	3	dobj	_	_
7	.	--	PUNCT	punc/--	_	3	punct	_	_

~~~


