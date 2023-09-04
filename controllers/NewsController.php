<?php


namespace app\controllers;


use app\models\News;
use yii\rest\ActiveController;

class NewsController extends ActiveController
{
    public $modelClass = News::class;
}