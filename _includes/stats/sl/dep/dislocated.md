

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

57 nodes (0%) are attached to their parents as `dislocated`.

34 instances of `dislocated` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.98245614035088.

The following 21 pairs of parts of speech are connected with `dislocated`: [sl-pos/VERB]()-[sl-pos/NOUN]() (15; 26% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (8; 14% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (7; 12% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (4; 7% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (3; 5% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (2; 4% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (2; 4% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (2; 4% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (2; 4% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (1; 2% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (1; 2% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (1; 2% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/X]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 dislocated	color:blue
1	ena	en	NUM	Mlpfsn	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	9	nsubj	_	word=ena|msd=Kbzzei
2	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	aux	_	word=bo|msd=Gp-pte-n
3	še	še	PART	Q	_	9	advmod	_	word=še|msd=L
4	pa	pa	CONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
5	z	_	X	Xt	_	7	reparandum	_	word=z|msd=Nt
6	[gap]	[gap]	X	X	_	9	punct	_	word=[gap]|msd=N
7	pa	pa	CONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
8	[name:personal]	[name:personal]	PROPN	X	_	9	dobj	_	word=[name:personal]|msd=N
9	zrihtala	zrihtati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=zrihtala|msd=Ggdd-ez
10	ne	ne	PART	Q	_	9	discourse	_	word=ne|msd=L
11	eno	en	NUM	Mlpfsa	Case=Acc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	12	nummod	_	word=eno|msd=Kbzzet
12	zvezo	zveza	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	9	dislocated	_	word=vezo|msd=Sozet

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dislocated	color:blue
1	res	res	ADV	Rgp	Degree=Pos	7	discourse	_	word=res|msd=Rsn
2	no	no	PART	Q	_	7	discourse	_	word=no|msd=L
3	vse	ves	PRON	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	dislocated	_	word=vse|msd=Zc-sei
4	vse	ves	PRON	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	3	conj	_	word=vse|msd=Zc-sei
5	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	word=jz|msd=Zop-ei
6	ne	ne	PART	Q	_	7	neg	_	word=ne|msd=L
7	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=vem|msd=Ggnspe
8	česa	kaj	PRON	Pq-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	11	dobj	_	word=česa|msd=Zv-ser
9	vse	ves	PRON	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	8	nmod	_	word=vse|msd=Zc-sei
10	ni	biti	AUX	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	word=ni|msd=Gp-ste-d
11	imel	imeti	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	word=mel|msd=Ggnd-em
12	…	…	PUNCT	Z	_	7	punct	_	word=…|msd=U
13	ja	ja	PART	Q	_	7	discourse	_	word=ja|msd=L
14	ja	ja	PART	Q	_	7	discourse	_	word=ja|msd=L
15	ja	ja	PART	Q	_	7	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dislocated	color:blue
1	[speaker:laughter]	[speaker:laughter]	X	X	_	6	punct	_	word=[speaker:laughter]|msd=N
2	…	…	PUNCT	Z	_	6	punct	_	word=…|msd=U
3	a	a	ADV	Rgp	Degree=Pos	6	advmod	_	word=a|msd=Rsn
4	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	word=to|msd=Zk-sei
5	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	word=je|msd=Gp-ste-n
6	šefe	šefe	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=šefe|msd=Somei
7	ne	ne	PART	Q	_	6	discourse	_	word=ne|msd=L
8	šefe	šefe	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	6	dislocated	_	word=šefe|msd=Somei
9	?	?	PUNCT	Z	_	6	punct	_	word=?|msd=U

~~~


