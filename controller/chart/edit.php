<?php

// redirects to the last edited step of the chart editor (todo)
$app->get('/(chart|map|table)/:id/edit', function($chartid) use ($app) {
    disable_cache($app);

    check_chart_exists($chartid, function($chart) use ($app) {
        $step = 'upload';
        $vis = DatawrapperVisualization::get($chart->getType());
        $steps = $vis['workflow'];
        switch ($chart->getLastEditStep()) {
            case 0:
            case 1: $step = $steps[0]['id']; break;
            case 2: $step = $steps[1]['id']; break;
            default: $step = $steps[2]['id']; //'visualize#tell-the-story';
        }
        $app->redirect('/'.$chart->getNamespace().'/'.$chart->getId() . '/' . $step);
    });
});
