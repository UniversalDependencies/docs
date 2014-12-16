---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
---

Aspect is a feature that specifies duration of the action in time,
whether the action has been completed etc.

In Czech, aspect is considered a lexical feature of [verbs](cs-pos/VERB).
While many imperfective verbs have morphologically related perfective counterparts,
it is not a regular system
and the two verbs are represented by different lemmas.

### `Imp`: imperfect aspect

The action took / takes / will take some time span and there is no
information whether and when it was / will be completed.

#### Examples

* _péci&nbsp;_ “to bake” (Imp); _<b>pekl</b> chleba&nbsp;_ “he baked / was
  baking a bread”

### `Perf`: perfect aspect

The action has been / will have been completed. Since there is
emphasis on one point on the time scale (the point of completion),
this aspect does not work well with the present tense.
Czech morphology can create present forms of perfective verbs but
these actually have a future meaning.

#### Examples

* _upéci&nbsp;_ “to bake” (Perf); _<b>upekl</b> chleba&nbsp;_ “he baked / has
  baked a bread”

## Diffs

### Prague Dependency Treebank

The PDT tagset does not encode aspect. However, verb lemmas in PDT contain their own features
that encode the aspect: `_:T` = `Imp` and `_:W` = `Perf`. These lemma features were removed
during conversion, and the `Aspect` feature was introduced instead.

Unfortunately the morphological lexicon underlying the PDT annotation is incomplete and numerous
verbs lack the aspect information. Without this imperfection there would be only a tiny group
of verbs that work with both aspects.
