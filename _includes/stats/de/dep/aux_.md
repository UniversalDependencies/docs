

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

4409 nodes (1%) are attached to their parents as `aux`.

3268 instances of `aux` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.23724200498979.

The following 11 pairs of parts of speech are connected with `aux`: [de-pos/VERB]()-[de-pos/AUX]() (3353; 76% instances), [de-pos/VERB]()-[de-pos/PART]() (968; 22% instances), [de-pos/AUX]()-[de-pos/PART]() (47; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (11; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (11; 0% instances), [de-pos/ADJ]()-[de-pos/PART]() (8; 0% instances), [de-pos/AUX]()-[de-pos/AUX]() (6; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	_	AUX	_	_	6	aux	_	_
2	die	_	DET	_	_	4	det	_	_
3	bestellten	_	ADJ	_	_	4	amod	_	_
4	Artikel	_	NOUN	_	_	6	dobj	_	_
5	prompt	_	ADV	_	_	6	advmod	_	_
6	erhalten	_	VERB	_	_	0	root	_	_
7	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Ich	_	PRON	_	_	2	nsubj	_	_
2	hatte	_	VERB	_	_	0	root	_	_
3	Gelegenheit	_	NOUN	_	_	2	dobj	_	_
4	eines	_	DET	_	_	6	det	_	_
5	seiner	_	PRON	_	_	6	det	_	_
6	Seminare	_	NOUN	_	_	8	dobj	_	_
7	zu	_	PART	_	_	8	aux	_	_
8	besuchen	_	VERB	_	_	3	xcomp	_	_
9	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	Das	_	DET	_	_	2	det	_	_
2	Hotel	_	NOUN	_	_	3	nsubj	_	_
3	sah	_	VERB	_	_	0	root	_	_
4	aus	_	ADP	_	_	3	mark	_	_
5	als	_	SCONJ	_	_	9	mark	_	_
6	wäre	_	VERB	_	_	9	cop	_	_
7	es	_	PRON	_	_	9	nsubj	_	_
8	kurz	_	ADV	_	_	9	advmod	_	_
9	davor	_	ADV	_	_	3	advcl	_	_
10	abgerissen	_	VERB	_	_	9	xcomp	_	_
11	zu	_	PART	_	_	12	aux	_	_
12	werden	_	AUX	_	_	10	auxpass	_	_
13	.	_	PUNCT	_	_	3	punct	_	_

~~~


