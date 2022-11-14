---
layout: base
title:  'Statistics of csubj in UD_Amharic-ATT'
udver: '2'
---

## Treebank Statistics: UD_Amharic-ATT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="am_att-dep-csubj-pass.html">csubj:pass</a></tt>.

40 nodes (0%) are attached to their parents as `csubj`.

39 instances of `csubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="am_att-pos-VERB.html">VERB</a></tt>-<tt><a href="am_att-pos-NOUN.html">NOUN</a></tt> (23; 57% instances), <tt><a href="am_att-pos-VERB.html">VERB</a></tt>-<tt><a href="am_att-pos-VERB.html">VERB</a></tt> (6; 15% instances), <tt><a href="am_att-pos-NOUN.html">NOUN</a></tt>-<tt><a href="am_att-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="am_att-pos-ADJ.html">ADJ</a></tt>-<tt><a href="am_att-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="am_att-pos-ADJ.html">ADJ</a></tt>-<tt><a href="am_att-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="am_att-pos-NOUN.html">NOUN</a></tt>-<tt><a href="am_att-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="am_att-pos-VERB.html">VERB</a></tt>-<tt><a href="am_att-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 csubj	color:blue
1	ለ	ለ	ADP	ADP	_	2	case	_	Translit=lä|LTranslit=lä
2	ሰርግ	ሰርግ	NOUN	NOUN	_	6	obl	_	Translit=särəgə|LTranslit=särəgə
3	ኡ	ኡ	DET	DET	_	2	det	_	Translit='u|LTranslit='u
4	በ	በ	ADP	ADP	_	6	case	_	Translit=bä|LTranslit=bä
5	ኣለ	ኣለ	PART	NEG	Polarity=Neg	6	advmod	_	Translit='alä|LTranslit='alä
6	መምጣት	መምጣት	NOUN	NOUN	VerbForm=Vnoun	8	csubj	_	Translit=mäməţatə|LTranslit=mäməţatə
7	ኤ	እኔ	PRON	POSM	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	LTranslit='əne|Translit='e
8	ተቀየም	ተቀየም	VERB	VERB	Mood=Ind|VerbForm=Fin|Voice=Pass	0	root	_	Translit=täqäjämə|LTranslit=täqäjämə
9	ኧኝ	እኔ	PRON	SUBJC	Number=Sing|Person=1|PronType=Prs	8	expl	_	LTranslit='əne|Translit='ăňə
10	።	።	PUNCT	PUNCT	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	ብ	ብ	ADP	ADP	_	2	mark	_	Translit=bə|LTranslit=bə
2	ሠር	ሠር	VERB	VERB	Mood=Ind|VerbForm=Fin	6	csubj	_	Translit=śärə|LTranslit=śärə
3	ኣ	እሱ	PRON	SUBJC	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	LTranslit='əsu|Translit='a
4	ው	ው	PRON	OBJC	_	2	obj	_	Translit=wə|LTranslit=wə
5	እ	እኔ	PRON	SUBJC	Number=Sing|Person=1|PronType=Prs	6	expl	_	LTranslit='əne|Translit='ə
6	ወድ	ወድ	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	Translit=wädə|LTranslit=wädə
7	ኣል	ኣል	AUX	AUX	_	6	aux	_	Translit='alə|LTranslit='alə
8	ኧሁ	እኔ	PRON	SUBJC	Number=Sing|Person=1|PronType=Prs	6	expl	_	LTranslit='əne|Translit='ăhu
9	ነገር	ነገርግን	CCONJ	CCONJ	Typo=Yes	12	cc	_	Translit=nägärə|LTranslit=nägärəgənə
10	ግን	_	X	_	_	9	goeswith	_	Translit=gənə
11	ጊዜ	ጊዜ	NOUN	NOUN	_	12	obj	_	Translit=gize|LTranslit=gize
12	የለ	የለ	VERB	VERB	Mood=Ind|VerbForm=Fin	6	conj	_	Translit=jälä|LTranslit=jälä
13	ኝ	እኔ	PRON	SUBJC	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	LTranslit='əne|Translit=ňə
14	ም	ም	PART	NEG	Polarity=Neg	12	advmod	_	Translit=mə|LTranslit=mə
15	።	።	PUNCT	PUNCT	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	የ	የ	ADP	ADP	_	2	case	_	Translit=jä|LTranslit=jä
2	መኪና	መኪና	NOUN	NOUN	_	5	csubj	_	Translit=mäkina|LTranslit=mäkina
3	ው	ው	DET	DET	_	2	det	_	Translit=wə|LTranslit=wə
4	ኣለ	ኣለ	PART	NEG	Polarity=Neg	5	advmod	_	Translit='alä|LTranslit='alä
5	መምጣት	መምጣት	NOUN	NOUN	VerbForm=Vnoun	8	advcl	_	Translit=mäməţatə|LTranslit=mäməţatə
6	አልማዝ	አልማዝ	PROPN	PROPN	_	8	nsubj:pass	_	Translit='äləmazə|LTranslit='äləmazə
7	ን	ን	PART	ACC	_	6	case	_	Translit=nə|LTranslit=nə
8	አስጨነ	አስጨነ	VERB	VERB	Mood=Ind|VerbForm=Fin|Voice=Cau	0	root	_	Translit='äsəćänä|LTranslit='äsəćänä
9	ኧ	እሱ	PRON	SUBJC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	expl	_	LTranslit='əsu|Translit='ă
10	ኣት	እሱ	PRON	OBJC	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	expl	_	LTranslit='əsu|Translit='atə
11	።	።	PUNCT	PUNCT	_	8	punct	_	Translit=.|LTranslit=.

~~~


