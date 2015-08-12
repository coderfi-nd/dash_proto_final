angular.module('dashboard').controller('set1_list_controller', function ($scope, WidgetLoader)
{	

	// list controller defines what will be displayed
	// you will get data from the services
	// list controller just creates a template
    $scope.widgets = WidgetLoader[0].widgets;
    
    $scope.data = [];
    $scope.options = [];
    
    for (var i = 0; i < $scope.widgets.length; i++)
    {

        if($scope.widgets[i].type == "pieChart")
        {
            $scope.options[i] = $scope.templates[0];

        }

        else if($scope.widgets[i].type == "multiBarChart")
        {

            $scope.options[i] = $scope.templates[1];

        }

        else if($scope.widgets[i].type == "discreteBarChart")
        {

            $scope.options[i] = $scope.templates[2];
        }

        else if($scope.widgets[i].type == "stackedAreaChart")
        {
            $scope.options[i] = $scope.templates[3];
        }

        else if($scope.widgets[i].type == "historicalBarChart")
        {

            $scope.options[i] = $scope.templates[4];
        }
    }

    for (i = 0; i < $scope.widgets.length; i++)
    {
        $scope.data.push($scope.widgets[i].data);
    }
	
});