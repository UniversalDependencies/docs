---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is used for grammaticalised multiword expressions with no productive internal syntax. The expression’s external dependency relation and [ExtPos]() feature are assigned to its first syntactic word; all remaining words attach directly to it with `fixed`. `ExtPos` records the category of the whole expression; individual words retain their own part-of-speech tags.

In _se veddemmo in sciâ terrassa_ “we (will) see each other on the terrace”, _in sce_ is a fixed prepositional expression. The article _a_ belongs to _terrassa_, although it forms the multiword token _sciâ_ with _sce_.

~~~ conllu
1	se	se	PRON	_	_	2	obj	_	Gloss=each-other
2	veddemmo	vedde	VERB	_	_	0	root	_	Gloss=we-see
3	in	in	ADP	_	ExtPos=ADP	6	case	_	Gloss=on
4-5	sciâ	_	_	_	_	_	_	_	_
4	sce	sce	ADP	_	_	3	fixed	_	_
5	a	o	DET	_	_	6	det	_	Gloss=the
6	terrassa	terrassa	NOUN	_	_	2	obl	_	Gloss=terrace

~~~

In _ne veuggio a-o manco træ_ “I want least three of them”, both the article _o_ and the noun _manco_ belong to the fixed expression and attach directly to _à_.

~~~ conllu
1	ne	ne	PRON	_	_	2	obl	_	Gloss=of-them
2	veuggio	voei	VERB	_	_	0	root	_	Gloss=I-want
3-4	a-o	_	_	_	_	_	_	_	_
3	à	à	ADP	_	ExtPos=ADV	6	advmod	_	Gloss=at
4	o	o	DET	_	_	3	fixed	_	_
5	manco	manco	NOUN	_	_	3	fixed	_	Gloss=least
6	træ	trei	NUM	_	_	2	obj	_	Gloss=three

~~~

## Examples

The following list is non-exhaustive:

| `ExtPos` | Expressions |
|---|---|
| `ADP` | _in sce_, _fin à_, _apreuvo à_, _davanti à_, _insemme à_, _derê à_, _vexin à_, _in mezo à_, _fin da_, _in ponto_, _contra de_, _in cangio de_, _pe mezo de_, _à peto de_ |
| `ADV` | _a-o manco_, _in gio_, _e passa_, _ben ben_, _de ciù_, _de seguo_, _pe contra_, _de botto_, _pe de ciù_, _pe-o ciù_, _in de ciù_, _tutt’assemme_ |
| `AUX` | _apreuvo à_, _derê à_ (progressive); _in scî pissi de_ (“to be about to”) |
| `CCONJ` | _ò sæ_, _ciufito che_, _ciutòsto che_ |
| `PRON` | _ben ben_ (“much, many”) |
| `SCONJ` | _tanto che_, _dæto che_, _dòppo che_, _intanto che_, _sciben che_, _comme se_, _con tutto che_, _avanti de_, _za che_, _primma che_, _avanti che_, _sensa che_, _primma de_, _tòsto che_ |

The category depends on the expression’s use. _Apreuvo à_ and _derê à_ take `ExtPos=AUX` in progressive constructions and `ExtPos=ADP` before nominal complements. In _ean apreuvo à coxinâ_ “they were cooking”, both _ean_ and _apreuvo à_ attach to the infinitive with [aux]():

~~~ conllu
1	ean	ëse	AUX	_	_	4	aux	_	Gloss=they-were
2	apreuvo	apreuvo	ADV	_	ExtPos=AUX	4	aux	_	Gloss=after
3	à	à	ADP	_	_	2	fixed	_	Gloss=to
4	coxinâ	coxinâ	VERB	_	_	0	root	_	Gloss=cook

~~~

The prospective _in scî pissi de_ “about to” has the same external relation. In _eimo in scî pissi de partî_ “we were about to leave”, _sce_, _i_, _pissi_ and _de_ all attach to _in_ with `fixed`, including the article inside _scî_:

~~~ conllu
1	eimo	ëse	AUX	_	_	7	aux	_	Gloss=we-were
2	in	in	ADP	_	ExtPos=AUX	7	aux	_	Gloss=in
3-4	scî	_	_	_	_	_	_	_	_
3	sce	sce	ADP	_	_	2	fixed	_	Gloss=on
4	i	o	DET	_	_	2	fixed	_	Gloss=the
5	pissi	pisso	NOUN	_	_	2	fixed	_	Gloss=edges
6	de	de	ADP	_	_	2	fixed	_	Gloss=of
7	partî	partî	VERB	_	_	0	root	_	Gloss=leave

~~~

_Ben ben_ takes `ExtPos=PRON` when it heads a nominal expression, independently or with a _de_ complement: in _ben ben de çexe_ “many cherries”, _çexe_ attaches to the first _ben_ with [nmod](). By contrast, _ben ben_ takes `ExtPos=ADV` when it modifies a verb, adjective or adverb.

## Compositional uses

The same word sequence can be fixed in one context and compositional in another. In compositional uses, its words have separate syntactic roles and take ordinary dependency relations.

For instance, _tanto che_ is fixed when it means “while”, as in _mangio tanto che lezo_ “I eat while I read”:

~~~ conllu
1	mangio	mangiâ	VERB	_	_	0	root	_	Gloss=I-eat
2	tanto	tanto	ADV	_	ExtPos=SCONJ	4	mark	_	Gloss=while
3	che	che	SCONJ	_	_	2	fixed	_	_
4	lezo	leze	VERB	_	_	1	advcl	_	Gloss=I-read

~~~

In _mangio mai tanto che vëgno grasso_ “I eat so much that I get fat”, by contrast, _tanto_ expresses quantity and modifies _mangio_ with [advmod](). The result clause introduced by _che_ attaches to _tanto_ with [advcl]().

~~~ conllu
1	mangio	mangiâ	VERB	_	_	0	root	_	Gloss=I-eat
2	mai	mäi	ADV	_	_	3	advmod	_	Gloss=so
3	tanto	tanto	ADV	_	_	1	advmod	_	Gloss=much
4	che	che	SCONJ	_	_	5	mark	_	Gloss=that
5	vëgno	vegnî	VERB	_	_	3	advcl	_	Gloss=I-get
6	grasso	grasso	ADJ	_	_	5	xcomp	_	Gloss=fat

~~~

In _ti viviæ de ciù_ “you will live longer”, _de ciù_ forms a fixed adverbial:

~~~ conllu
1	Ti	ti	PRON	_	_	2	nsubj	_	Gloss=you
2	viviæ	vive	VERB	_	_	0	root	_	Gloss=will-live
3	de	de	ADP	_	ExtPos=ADV	2	advmod	_	_
4	ciù	ciù	ADV	_	_	3	fixed	_	Gloss=longer

~~~

By contrast, in _e critiche de ciù governi_ “criticism from several governments”, _de_ introduces the noun phrase and _ciù_ “several” is a [DET]() modifying _governi_ with [det]():

~~~ conllu
1	e	o	DET	_	_	2	det	_	Gloss=the
2	critiche	critica	NOUN	_	_	0	root	_	Gloss=criticism
3	de	de	ADP	_	_	5	case	_	Gloss=from
4	ciù	ciù	DET	_	_	5	det	_	Gloss=several
5	governi	governo	NOUN	_	_	2	nmod	_	Gloss=governments

~~~
