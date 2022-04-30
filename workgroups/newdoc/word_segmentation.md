---
layout: base
title:  'Word Segmentation'
udver: '2'
---

# Tokenization and Word Segmentation

This page provides guidance on marking boundaries of syntactic words in UD. It aims to be a thorough supplement of the short information [here](https://universaldependencies.org/u/overview/tokenization.html) (but we may want to merge the two pages in the future), as well as in the [specification of the CoNLL-U format](https://universaldependencies.org/format.html#words-tokens-and-empty-nodes).

Words are normally delimited by whitespace characters (but see below for exceptional cases where “words with spaces” may be allowed). The problem we tackle here is figuring out where (and how) one should draw a word boundary even if there is no space. The CoNLL-U format provides two techniques, which we will call **tokenization** and **word segmentation (multi-word tokens).**

## Which technique should be used?

Tokenization is the simpler and more low-level of the two. A surface string of non-whitespace characters is segmented into two or more tokens, and each token except the last one gets the attribute `SpaceAfter=No` in the MISC column. Unlike in some non-UD approaches, tokenization does not involve any normalization of the word forms, that is, the FORM column of surface tokens\* contains exact substrings of the input text, and the original surface string can be reconstructed by concatenation. (If normalization is desired, it can be done in the LEMMA column and possibly with additional attributes in MISC.) `SpaceAfter=No` can occur even on the last token of the sentence if there was no space between this token and the first token of the next sentence.

\* Some lines correspond to “empty nodes” or to syntactic words within “multi-word tokens” (see below). The contents of the FORM column on such lines does not correspond to a substring of the input text.

    # text = Go home!
    1   Go     go     VERB    _   Mood=Imp|VerbForm=Fin   0   root     _   _
    2   home   home   ADV     _   _                       1   advmod   _   SpaceAfter=No
    3   !      !      PUNCT   _   _                       1   punct    _   _

Word segmentation is more complex. The CoNLL-U file contains an extra line representing the multi-word surface token **(MWT),** and two or more subsequent lines represent syntactic words extracted from the multi-word token. The form of the surface token does not have to be a simple concatenation of the forms of the syntactic words. This is useful for various contractions where the uncontracted form of the word can be shown.

    # text = I don't like it.
    1     I       I      PRON    _   Case=Nom|Number=Sing|Person=1|PronType=Prs               4   nsubj    _   _
    2-3   don't   _      _       _   _                                                        _   _        _   _
    2     do      do     AUX     _   Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin    4   aux      _   _
    3     not     not    PART    _   Polarity=Neg                                             4   advmod   _   _
    4     like    like   VERB    _   VerbForm=Inf                                             0   root     _   _
    5     it      it     PRON    _   Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs   4   obj      _   SpaceAfter=No
    6     .       .      PUNCT   _   _                                                        4   punct    _   _

    # lang = de
    # text = Der Haus steht am See.
    # text_en = The house stands at the lake.
    1     Das     der      DET     _   Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art   2   det     _   Gloss=the
    2     Haus    Haus     NOUN    _   Case=Nom|Number=Sing                                         3   nsubj   _   Gloss=house
    3     steht   stehen   VERB    _   Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin        0   root    _   Gloss=stands
    4-5   am      _        _       _   _                                                            _   _       _   _
    4     an      an       ADP     _   _                                                            6   case    _   Gloss=at
    5     dem     der      DET     _   Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art   6   det     _   Gloss=the
    6     See     See      NOUN    _   Case=Dat|Gender=Masc|Number=Sing                             3   obl     _   Gloss=lake|SpaceAfter=No
    7     .       .        PUNCT   _   _                                                            3   punct   _   Gloss=.

We observe that the latter technique (word segmentation) could be used to encode tokenization too (except for the rare case where `SpaceAfter=No` occurs at the end of the sentence). But it is not supposed to be used in such cases.

In most languages, tokenization is used whenever a punctuation symbol occurs on one or both sides of the word boundary. A prototypical example: typographical rules of the language require that comma be written adjacent to the preceding word but in UD, we have to make them two independent tokens: the word and the comma.

On the other hand, a word boundary between two adjacent letters should almost always be encoded as a multi-word token, even if the forms of the syntactic words are proper substrings of the surface form. There is one exception though. In writing systems where orthographic words are not delimited by spaces (such as Chinese and Japanese), the token boundaries are encoded using `SpaceAfter=No`, i.e., the low-level tokenization. One reason is simplicity; the other reason is that a multi-word token can be interpreted as an orthographic word, and there are no orthographic words in these writing systems (we would have to annotate the entire sentence as one orthographic “word”).

    # lang = zh
    # text = 現在我們在瓦倫西亞。
    # translit = Xiànzài wǒmen zài wǎlúnxīyǎ.
    # text_en = We are now in Valencia.
    1     現在　　   現在　　   ADV     _   _                                   4   advmod   _   Gloss=now|SpaceAfter=No
    2     我們　　   我　　　   PRON    _   Number=Plur|Person=1|PronType=Prs   4   nsubj    _   Gloss=we|SpaceAfter=No
    3     在　　　   在　　　   ADP     _   _                                   4   case     _   Gloss=in|SpaceAfter=No
    4     瓦倫西亞   瓦倫西亞   PROPN   _   _                                   0   root     _   Gloss=Valencia|SpaceAfter=No
    5     。　　　   。　　　   PUNCT   _   _                                   4   punct    _   Gloss=.|SpaceAfter=No

## Tokenization rules

UD does not have strict universal tokenization rules, although it is desirable to harmonize tokenization at least across different treebanks of one language. Unfortunately, tokenization is sometimes inherited from non-UD data sources and it is not easy to change. The following principles are often followed and they can be taken as recommendation:

* Punctuation such as period (.), exclamation (!), question (?), comma (,), semicolon (;), colon (:), quotation marks and brackets is normally separated from the adjacent word, but see exceptions below.
* Hyphenated compounds are split to three tokens (part1, hyphen, part2). Various languages may use the hyphen more or less prescriptively under various circumstances, such as attachment of clitics. The hyphen is best solved as not being part of neither the clitic nor the host word. But see the exceptions with phone numbers and similar stuff below.
* If a period or comma is used in decimal numbers, the whole number stays as one token (3.141592).
* If a period denotes an abbreviation, it stays together with the abbreviated word (etc.)
* There may be other types of tokens, especially technical entities, that contain a mixture of letters, numbers and punctuation symbols, such as telephone numbers (800-529-1234), e-mail addresses (frank@example.com), URLs (https://universaldependencies.org/) etc.
* A sequence of punctuation symbols is normally decomposed into individual symbols (e.g. if a sentence ends with ?") but sometimes multiple characters form one symbol (e.g. if ellipsis is written as three periods ... rather than the Unicode character …)

The rules for word boundaries in languages like Chinese and Japanese must be defined in the language-specific documentation.

## To segment or not to segment?

<!-- multi-word tokens are evil; avoid them :-) -->

Word segementation with multi-word tokens should not be overused. It makes processing of the data more difficult, so you should think twice whether it is really justified and needed. Remember that UD annotates properties of (syntactic) words, not morphemes. Here are some guidelines:

* If there is no suitable UPOS tag for the surface token but we can split it to parts that have clear UPOS categories, split it.

A good example is the contraction of a preposition and an article, as observed e.g. in German or many Romance languages: [de] _am = an + dem, zur = zu + der,_ [es] _al = a + el._ While they may have a specialized POS tag in the native POS tagsets, UPOS tags cannot account for each contraction type in each language, so we have to split such contractions to two words, tagged [ADP]() and [DET]().

* If the split would result in syntactic words that also occur independently in the language, split it.

Looking again at the preposition-article contractions in German, we note that elsewhere prepositions and articles are spelled as independent words: _<b>an</b> einem See_ “at a lake”, _nach <b>dem</b> Konzert_ “after the concert” etc.

* If there is no suitable dependency relation to attach the parts to the rest of the tree, don't split it.
* If there are no better relations than [compound](), [flat](), [fixed]() or [goeswith](), don't split it. All these relations are in a sense intended to say that the items they connect somehow behave as one word morphosyntactically. And it does not make sense to split a token into two “words” only to connect the parts back and say that in fact they do form one word.

Languages differ in their spelling rules, so the same compound may be spelled as one word in German, and as four words in English: _Lebens<b>versicherungs</b>gesellschafts<b>angestellter</b>_ “life <b>insurance</b> company <b>employee</b>”. We do not split the German word into four just because it is spelled as four words in English. We also do not treat the English compound as one word with spaces; instead, we use the specialized dependency relation [compound]() to signal that the sequence works morphosyntactically almost as one word and is different from ordinary nominal modifiers in English.

* If different parts of a surface token enter different syntactic relations (especially if their parents differ), split it.

In Sanskrit, spaces are inserted at intonational pauses and do not necessarily line up with syntax. So in _sakalaśāstrapāraṅgataścātra saṁsadi labdhakīrtiḥ_, lit. _entire-science-who.has.acquired-and-here at.the.court who.is.famous_, “with a reputation for competence in numerous sciences”, the first token must be split at least to two parts (discontiguous subtrees) but in fact as many as five words can be identified there:

~~~ sdparse
sakala śāstra pāraṅgata ca atra saṁsadi labdhakīrtiḥ
amod(śāstra, sakala)
nmod(pāraṅgata, śāstra)
conj(pāraṅgata, labdhakīrtiḥ)
cc(labdhakīrtiḥ, ca)
nmod(labdhakīrtiḥ, saṁsadi)
advmod(saṁsadi, atra)
~~~

* Clitics are phonologically dependent morphemes that have some syntactic autonomy (and could be thus considered syntactic words). If they are written as separate words (delimited by a space, a hyphen or apostrophe), they pose no problem; however, the orthographical rules may dictate that a clitic be written together with a neighboring word. Multi-word tokens may be used to separate clitics from their host words _if it is necessary._ Note however that the mere designation as a clitic does not automatically mean that it has to be separated. In some cases, clitics may be captured as inflection of the host word, using appropriate morphological features.

An often cited example of clitic segmentation in UD is Spanish, where pronominal clitics are sometimes written together with the verb whose arguments they are: _vámonos = vamos + nos_ lit. _we.go + ourselves_ “let's leave”; _dámelo = da + me + lo_ “give me it”. The crucial point is that the clitics are normally written as separate words and only if the verb is in imperative or infinitive form, the object clitics are written attached to it. So we have for instance _nos vamos al mar_ “we are leaving for the sea”; _me lo das mañana_ “you give me it tomorrow”. By splitting the object clitic from the imperative or infinitive, we are enabling the same annotation that is used for the indicative and other forms of the verb.

Note that we do not create syntactic words for subject pronouns, although in many Spanish sentences the subject can be recognized only from the form of the verb. For example, _voy_ means “I go”, _va_ “he/she goes”, _vamos_ “we go”. However, these are not contracted forms of a subject pronoun and the verb stem. These are simply verb forms that show agreement with (or cross-reference) the subject. The agreement is captured using features such as [Person]() and [Number]() at the verb. The form of the verb will stay the same if an overt subject is present: _yo voy_ “I go”, _Miguel va_ “Miguel goes”.

Even if the agreement morpheme is clearly similar in form to the corresponding full pronoun, we do not have to (and shouldn't) separate it if it always appears at the fixed position next to the verb, and if it stays there even if an overt subject is present.

Furthermore, verbs in some languages (such as Basque) cross-reference both the subject and the object. Since it is agreement morphology and not freely floating clitics, no segmentation is applied and multiple layers of morphological features are used instead.

* Negation can be expressed using function words (such as _not_ in English) or bound morphemes (such as the prefix _ne-_ in Czech); in the latter case, the negated word is tagged with [Polarity]()`=Neg` and the morpheme is not separated from the host word.
* Definiteness can be expressed using function words (such as _a, the_ in English) or bound morphemes (such as the definite suffixes in Scandinavian and Balkan languages); in the latter case, the morpheme is not separated as an “article”; instead, the host word is tagged with the [Definite]() feature. See also [Issue 661](https://github.com/UniversalDependencies/docs/issues/661) for a related discussion about Semitic languages.
* If adpositions are written together with the neighboring word, they can be treated as [Case]() morphemes (instead of separating them as function words).

* The final rule: If something looks like a border case considering the above guidelines, keep the orthographic words and don't split them.

## Words with spaces

So far we have mostly dealt with situations where one orthographic word (surface token) acts as multiple syntactic words. There are also situations where multiple surface tokens act as one (morpho)syntactic word. The standard solution is that these tokens are kept as independent nodes in the dependency structure and they are connected using specialized relations ([compound](), [flat](), [fixed](), [goeswith]()).

However, in exceptional cases it is possible to have “words with spaces”, i.e., there is one node with one corresponding line in the CoNLL-U format but it contains one or more word-internal space characters in the FORM (and possibly also LEMMA) field. The utilization of this option should be extremely limited, and alternative solutions should always be sought. One uncontroversial example where word-internal spaces make sense is long numbers in languages like French or Czech, where spaces are used to make the number more readable: _1&nbsp;000&nbsp;000_.

Finally, Vietnamese is an example (and so far the only example) of a language where words with spaces are used frequently. The reason is that in the Vietnamese writing system, spaces delimit monosyllabic morphemes rather than words (with the exception of foreign loanwords, such as _bêtông_ in the example below, which are sometimes written without separating syllables by spaces). The Vietnamese writing system is thus parallel to Chinese, the string between spaces corresponds to one Chinese character, and there are no visible word boundaries in the text.

    # lang = vi
    # text = Tất cả đường bêtông nội đồng là thành quả…
    # text_en = All the concrete country roads are an achievement…
    1     Tất cả      tất cả      PRON   _   _   2   det     _   Gloss=all
    2     đường       đường       NOUN   _   _   6   nsubj   _   Gloss=road
    3     bêtông      bêtông      NOUN   _   _   2   nmod    _   Gloss=concrete
    4     nội đồng    nội đồng    NOUN   _   _   2   nmod    _   Gloss=country
    5     là          là          AUX    _   _   6   cop     _   Gloss=be
    6     thành quả   thành quả   NOUN   _   _   0   root    _   Gloss=achievement
    …

## Multiple spaces, tabulators, newlines

The CoNLL-U format can capture whether there was at least one whitespace character between two word forms but it cannot tell whether there were multiple spaces, or even other whitespace characters, such as tabulators or line breaks. If preserving the exact form of the input text is desired, these nuances can be captured using additional attributes in the MISC column, `SpacesAfter` and `SpacesBefore`. This format was proposed and discussed in [Issue 332](https://github.com/UniversalDependencies/docs/issues/332). It is also generated by some UD processing tools, most notably [UDPipe](https://ufal.mff.cuni.cz/udpipe).
