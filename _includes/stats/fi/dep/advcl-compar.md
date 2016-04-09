

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [advcl]().

481 nodes (0%) are attached to their parents as `advcl:compar`.

386 instances of `advcl:compar` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.95634095634096.

The following 31 pairs of parts of speech are connected with `advcl:compar`: [fi-pos/ADJ]()-[fi-pos/NOUN]() (105; 22% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (64; 13% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (41; 9% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (38; 8% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (32; 7% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (28; 6% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (20; 4% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (19; 4% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (19; 4% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (14; 3% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (13; 3% instances), [fi-pos/DET]()-[fi-pos/VERB]() (13; 3% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (11; 2% instances), [fi-pos/DET]()-[fi-pos/NOUN]() (11; 2% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (8; 2% instances), [fi-pos/DET]()-[fi-pos/PROPN]() (5; 1% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (5; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (4; 1% instances), [fi-pos/DET]()-[fi-pos/ADJ]() (3; 1% instances), [fi-pos/DET]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/DET]()-[fi-pos/PRON]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (3; 1% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl:compar	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:compar	color:blue
1	Edistyt	edistyä	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	0	root	_	_
2	jos	jos	SCONJ	Pcle,CS	_	3	mark	_	_
3	kuljet	kulkea	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	1	advcl	_	_
4	aikaa	aika	NOUN	N,Sg,Par	Case=Par|Number=Sing	5	advcl:compar	_	_
5	nopeammin	nopeammin	ADV	Adv,Cmp	Degree=Cmp	3	advmod	_	_
6	ja	ja	CONJ	Pcle,CC	_	1	cc	_	_
7	taannut	taantua	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	1	conj	_	_
8	jos	jos	SCONJ	Pcle,CS	_	9	mark	_	_
9	hitaammin	hitaammin	ADV	Adv,Cmp	Degree=Cmp	7	advmod	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl:compar	color:blue
1	Kirja	kirja	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	3	cop	_	_
3	parempi	parempi	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
4	kuin	kuin	SCONJ	Pcle,CS	_	7	mark:comparator	_	_
5	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	aux	_	_
7	luullutkaan	luulla	VERB	V,Act,PcpNut,Sg,Nom,Kaan	Case=Nom|Clitic=Kaan|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	3	advcl:compar	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


