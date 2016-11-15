

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3502 nodes (1%) are attached to their parents as `auxpass`.

2300 instances of `auxpass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.57424328954883.

The following 6 pairs of parts of speech are connected with `auxpass`: [de-pos/VERB]()-[de-pos/AUX]() (3489; 100% instances), [de-pos/VERB]()-[de-pos/VERB]() (4; 0% instances), [de-pos/ADJ]()-[de-pos/AUX]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/AUX]() (3; 0% instances), [de-pos/VERB]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/X]()-[de-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 auxpass	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubjpass	_	_
3	konnte	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	angeblich	angeblich	ADV	ADJD	_	5	advmod	_	_
5	nicht	nicht	PART	PTKNEG	_	6	neg	_	_
6	storniert	stornieren	VERB	VVPP	VerbForm=Part	0	root	_	_
7	werden	werden	AUX	VAINF	VerbForm=Inf	6	auxpass	_	_
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 auxpass	color:blue
1	Er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	kommandiert	kommandieren	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
3	Merlin	Merlin	PROPN	NE	Case=Acc|Number=Sing	2	dobj	_	_
4	gerne	gerne	ADV	ADV	_	2	advmod	_	_
5	herum	herum	ADV	PTKVZ	_	2	compound:prt	_	_
6	und	und	CONJ	KON	_	2	cc	_	_
7	ist	sein	VERB	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	10	auxpass	_	_
8	leicht	leicht	ADJ	ADJD	Degree=Pos	10	advmod	_	_
9	zu	zu	PART	PTKZU	_	10	mark	_	_
10	provozieren	provozieren	VERB	VVINF	VerbForm=Inf	2	conj	_	_
11	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 auxpass	color:blue
1	Nach	nach	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Definite=Def|PronType=Art	3	det	_	_
3	Auftreten	Auftreten	NOUN	NN	_	0	root	_	_
4	der	der	DET	ART	Definite=Def|PronType=Art	8	det	_	_
5	ersten	erst	ADJ	ADJA	Degree=Pos|NumType=Ord	8	amod	_	_
6	AIDS	AIDS	NOUN	NE	_	8	compound	_	_
7	-	-	PUNCT	$(	_	8	punct	_	_
8	Krankheitsfälle	Krankheitsfall	NOUN	NN	_	3	nmod	_	_
9	1981	1981	NUM	CARD	NumType=Card	3	nmod	_	_
10	und	und	CONJ	KON	_	3	cc	_	_
11	einer	ein	DET	ART	Definite=Ind|PronType=Art	14	det	_	_
12	beginnenden	beginnend	ADJ	ADJA	Degree=Pos	14	amod	_	_
13	gesellschaftlichen	gesellschaftlich	ADJ	ADJA	Degree=Pos	14	amod	_	_
14	Diskussion	Diskussion	NOUN	NN	_	3	conj	_	_
15	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	auxpass	_	_
16	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
17	Deutsche	deutsch	PROPN	ADJA	_	20	name	_	_
18	AIDS	AIDS	PROPN	NE	_	20	name	_	_
19	-	-	PUNCT	$(	_	20	punct	_	_
20	Hilfe	Hilfe	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	3	nsubjpass	_	_
21	e.V.	e.V.	PROPN	NE	_	20	appos	_	_
22	(	(	PUNCT	$(	_	23	punct	_	_
23	DAH	DAH	PROPN	NE	_	20	appos	_	_
24	)	)	PUNCT	$(	_	23	punct	_	_
25	an	an	ADP	APPR	_	3	case	_	_
26	dem	der	DET	ART	Definite=Def|PronType=Art	3	det	_	_
27	23	23	NUM	CARD	NumType=Card	25	dep	_	_
28	.	.	PUNCT	$.	_	27	punct	_	_

~~~


