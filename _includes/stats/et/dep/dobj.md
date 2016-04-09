

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

572 nodes (6%) are attached to their parents as `dobj`.

453 instances of `dobj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.79195804195804.

The following 8 pairs of parts of speech are connected with `dobj`: [et-pos/VERB]()-[et-pos/NOUN]() (459; 80% instances), [et-pos/VERB]()-[et-pos/PRON]() (79; 14% instances), [et-pos/VERB]()-[et-pos/PROPN]() (21; 4% instances), [et-pos/VERB]()-[et-pos/NUM]() (6; 1% instances), [et-pos/VERB]()-[et-pos/SCONJ]() (3; 1% instances), [et-pos/ADV]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/VERB]()-[et-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dobj	color:blue
1	Suur	suur+0	ADJ	adj/pos,sg,nom,%cap	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	keskmees	kesk_mees+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	3	nsubj	_	_
3	kaevab	kaeva+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	riigikogule	riigi_kogu+le	NOUN	n/com,sg,all	Case=All|Number=Sing	3	nmod	_	_
5	auku	auk+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	3	dobj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	Jalgade	jalg+de	NOUN	n/com,pl,gen,.cap	Case=Gen|Number=Plur	3	nmod	_	_
2	vahel	vahel+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	1	case	_	_
3	liigutas	liiguta+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Part	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ennast	ise+t	PRON	pron-poss/pos,det,refl,sg,part	Case=Par|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	3	dobj	_	_
5	mingi	mingi+0	PRON	pron-def/indef,sg,nom	Case=Nom|Number=Sing|Poss=Yes|PronType=Ind,Neg	7	nmod	_	_
6	ligane	ligane+0	ADJ	adj/pos,sg,nom	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	olend	olend+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	3	nsubj	_	_
8	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	Tõukan	tõuka+n	VERB	v-fin/main,indic,pres,ps1,sg,ps,af,.cap,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Donaldi	Donald+0	PROPN	prop/prop,sg,gen,.cap,.?	Case=Gen|Number=Sing	1	dobj	_	_
3	ukse	uks+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	1	nmod	_	_
4	taha	taha+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	3	case	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	1	punct	_	_

~~~


